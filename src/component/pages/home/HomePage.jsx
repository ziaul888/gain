'use client'
import EventCard from "@/component/global/card/EventCard";
import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAllEvents} from "@/redux/slices/event";


const HomePage = () => {
	const dispatch=useDispatch()
	const {events} = useSelector((state) => state.events);
	const fetchEvents = async () => {
		const response = await axios.get('/api/event');
		dispatch(setAllEvents(response.data));
	};
	useEffect(() => {
		fetchEvents();
	}, []);
	return( <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px] pr-[25px]">
		{events?.map((event) => (
			<EventCard key={event?.id} event={event}/>
		))}
	</div>)
};

export default HomePage;
