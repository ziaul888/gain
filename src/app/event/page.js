'use client'
import React from 'react';
import EventForm from "@/component/pages/event/EventPage";
import axios from "axios";
import {useParams,useRouter} from "next/navigation";

const Index = () => {
    const router=useRouter()
  const handleFormSubmit = async (values) => {
      try {
          await axios.post('/api/event', values);
          router.push("/")
          // fetchEvents();
      } catch (error) {
          console.error('Error creating event:', error);
      }
  }
    return (
        <div>
           <EventForm handleFormSubmit={handleFormSubmit}/>
        </div>
    );
};

export default Index;
