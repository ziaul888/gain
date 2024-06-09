"use client";
import { useEffect, useState } from "react";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

const ColorSwitch = () => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.classList.add(savedTheme);
		} else {
			const prefersDarkScheme = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			const initialTheme = prefersDarkScheme ? "dark" : "light";
			setTheme(initialTheme);
			document.documentElement.classList.add(initialTheme);
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		document.documentElement.classList.remove(theme);
		document.documentElement.classList.add(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="w-8 h-8 rounded-full flex justify-center items-center"
		>
			{theme === "light" ? <MoonIcon /> : <SunIcon />}
		</button>
	);
};

export default ColorSwitch;
