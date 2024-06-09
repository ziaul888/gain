// app/api/events/route.js
import { NextResponse } from 'next/server';

export let eventList = [
    {
        id: 1,
        title: 'Sample Event 1',
        description: 'This is a sample event description.',
        location: 'New York',
        startDate: '2024-06-01',
        endDate: '2024-06-02',
    },
    // Add more initial events if needed
];

export async function GET() {
    return NextResponse.json(eventList);
}

export async function POST(req) {
    const { title, description, location, startDate, endDate } = await req.json();
    const newEvent = { id: Date.now(), title, description, location, startDate, endDate };
    eventList.push(newEvent);
    return NextResponse.json(newEvent, { status: 201 });
}
