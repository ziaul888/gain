import Button from "@/component/global/Button./Button";
import Image from "next/image";
import Link from "next/link";
import ProfileDropdown from "@/component/global/Navbar/ProfileDropdown";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";

import {setAllEvents} from "@/redux/slices/event";

const Navbar = () => {
	const dispatch=useDispatch()
	const { token } = useSelector((state) => state.token);
	const [searchQuery, setSearchQuery] = useState("");
	const {events} = useSelector((state) => state.events);
	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		const tempEvent = searchQuery
			? events?.filter((event) =>
				event?.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				event?.description.toLowerCase().includes(searchQuery.toLowerCase())
			)
			: events;
		dispatch(setAllEvents(tempEvent));
		console.log("Search submitted: ", searchQuery);
		console.log("Filtered events: ", tempEvent);
	};


	return (
		<header className="py-2 h-[65px] shadow-header bg-section px-4 sticky top-0 flex items-center">
			<div className="flex items-center gap-5 w-full">
				<div className="flex justify-between items-center md:w-full md:max-w-[260px]">
					<Link href="/" className="md:block hidden">
						<Image
							src="/next.svg"
							alt="logo"
							className="object-contain"
							width={116}
							height={30}
						/>
					</Link>
				</div>
				<form onSubmit={handleSearchSubmit} className="flex-grow mx-4">
					<input
						type="text"
						value={searchQuery}
						onChange={handleSearchChange}
						placeholder="Search..."
						className="w-full max-w-[400px] py-1 px-3 rounded border border-gray-300 focus:outline-none"
					/>
				</form>
				<div className="flex gap-2 justify-end">
					<div className="ms-1 mr-3">
						{token ? (
							<ProfileDropdown />
						) : (
							<button className="btn">
								<Link href="/auth/login">Login</Link>
							</button>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
