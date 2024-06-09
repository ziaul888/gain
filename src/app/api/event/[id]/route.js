// app/api/events/[id]/route.js
import { NextResponse } from 'next/server';
import {eventList} from "@/app/api/event/route";


export async function GET(req, { params }) {
    const { id } = params;
    const event = eventList.find(event => event.id === parseInt(id));
    if (!event) {
        return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }
    return NextResponse.json(event);
}

export async function PUT(req, { params }) {
    const { id } = params;
    const { title, description, location, startDate, endDate } = await req.json();
    const eventIndex = eventList.findIndex(event => event.id === parseInt(id));

    if (eventIndex === -1) {
        return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    eventList[eventIndex] = { ...eventList[eventIndex], title, description, location, startDate, endDate };
    return NextResponse.json(eventList[eventIndex]);
}
