
import { NextResponse } from 'next/server';
import { users } from '@/utils/model/users';



export async function POST(req) {
    const { email, password } = await req.json();

    const user = users.find(user => user.email === email);
    if (!user) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    //const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //     return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    // }

    const token = "token_secure";

    const response = NextResponse.json({ token, user: { id: user.id, username: user.username, email: user.email } }, { status: 200 });
    response.cookies.set('token', token);

    return response;
}
