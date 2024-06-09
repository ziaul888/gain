import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { users } from '@/utils/model/users';

export async function POST(req) {
    const { username, email, password } = await req.json();
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        id: Date.now(),
        username,
        email,
        password: password,
    };

    users.push(newUser);
     console.log({users})
    return NextResponse.json({ message: 'User created' }, { status: 201 });
}