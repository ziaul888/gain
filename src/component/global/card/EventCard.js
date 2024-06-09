// src/EventCard.jsx
import React from 'react';
import Link from "next/link";

const EventCard = ({event}) => {
    console.log({event})
    const{ title, description, location, startDate, endDate }=event
    return (
        <Link href={`/event/${event.id}`}>
        <div className="w-full rounded shadow-lg my-4">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 py-4">
                <p className="text-gray-700 text-sm"><strong>Location:</strong> {location}</p>
                <p className="text-gray-700 text-sm"><strong>Start Date:</strong> {startDate}</p>
                <p className="text-gray-700 text-sm"><strong>End Date:</strong> {endDate}</p>
            </div>
        </div>
        </Link>
    );
};

export default EventCard;
