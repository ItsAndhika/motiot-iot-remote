"use client";
import React, { useState, useEffect } from "react";

export default function Container() {
	const [isAutomatic, setIsAutomatic] = useState<boolean>(true);
	const [lampStatus, setLampStatus] = useState<string>("");
	const [log, setLog] = useState<string>("");

	useEffect(() => {
		setInterval(() => {
			fetch("https://motiot.vercel.app/api/get-log", {
				next: { revalidate: 1 },
			})
				.then((response) => response.json())
				.then((log) => {
					console.log(log[0]);
					setLampStatus(log[0].status);
				});
		}, 1000);
	}, []);

	const handleToggle = async () => {
		setIsAutomatic((prev: boolean) => !prev);
	};

	return (
		<main className="w-11/12 h-[90vh] mx-auto flex flex-col justify-center items-center gap-10 bg-white/20 rounded-3xl backdrop-blur-lg shadow-2xl">
			<h1 className="text-center text-2xl font-bold bg-gradient-to-br from-[#434343] to-black text-transparent bg-clip-text">
				Lamp Control
			</h1>
			<p className="text-lg font-semibold">Status : {lampStatus}</p>
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
