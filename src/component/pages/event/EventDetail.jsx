'use client'
import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {useParams,useRouter} from "next/navigation";

import EventForm from "@/component/pages/event/EventPage";
import axios from "axios";

const EventDetail = () => {
    const router=useRouter()
    const [edit,setEdit]=useState(false)
    const { id } = useParams();
    const {events} = useSelector((state) => state.events);
    const filterEvents=()=>{
        return events?.find((event)=>event?.id==id)
    }

    const handleSubmit = async (values) => {
        try {
            await axios.put(`/api/event/${filterEvents()?.id}`, values);
            router.push("/")
        } catch (error) {
            console.error('Error updating event:', error);
        }
    };
    const handleClick=()=>{
        setEdit(true)
    }
    return (
        <>
            {edit ? <EventForm item={filterEvents()} handleFormSubmit={handleSubmit} />
                :
                <div className="max-w-[700px] mx-auto mt-10 shadow-medium p-4">
                <h1 className="text-title">{filterEvents()?.title}</h1>
                <p className="text-black">{filterEvents()?.description}</p>
                <div className="py-4">
                    <p className="text-gray-700 text-sm"><strong>Location:</strong> {filterEvents()?.location}</p>
                    <p className="text-gray-700 text-sm"><strong>Start Date:</strong> {filterEvents()?.startDate}</p>
                    <p className="text-gray-700 text-sm"><strong>End Date:</strong> {filterEvents()?.endDate}</p>
                </div>
                <button className="btn" onClick={handleClick}>
                    Edit
                </button>
            </div>}
        </>
    );
};

export default EventDetail;
