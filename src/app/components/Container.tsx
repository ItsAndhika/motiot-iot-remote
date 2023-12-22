"use client";
import React, { useState, useEffect } from "react";

export default function Container() {
	const [isAutomatic, setIsAutomatic] = useState<boolean>(true);

	useEffect(() => {
		fetch("https://motiot.vercel.app/api/get-automatic-mode", {
			next: { revalidate: 1000 },
		})
			.then((data) => data.json())
			.then((data) => setIsAutomatic(data[0].isAutomatic));
	}, []);

	const handleToggle = async () => {
		setIsAutomatic((prev: boolean) => !prev);
		const response = await fetch(
			"https://motiot.vercel.app/api/set-automatic-mode",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ isAutomatic }),
			}
		);
		const result = await response.json();
		console.log(result);
	};

	return (
		<main className="w-11/12 h-[90vh] mx-auto flex flex-col justify-center items-center gap-10 bg-white/20 rounded-3xl backdrop-blur-lg shadow-2xl">
			<h1 className="text-center text-2xl font-bold bg-gradient-to-br from-[#434343] to-black text-transparent bg-clip-text">
				Lamp Control
			</h1>
			<button
				onClick={handleToggle}
				className="px-3 py-2 rounded-full bg-gradient-to-br from-[#434343] to-black text-white font-semibold text-xl transition-all duration-1000 hover:scale-105"
			>
				{isAutomatic ? "Switch to manual" : "Switch to automatic"}
			</button>
			<div className={`${!isAutomatic ? "visible" : "invisible"} flex`}>
				<span>On</span>
				<div></div>
				<span>Off</span>
			</div>
		</main>
	);
}
