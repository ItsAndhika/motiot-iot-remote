"use client";
import React, { useState, useEffect } from "react";
import ToggleAutomatic from "./ToggleAutomatic";

export default function Container() {
	const [isAutomatic, setIsAutomatic] = useState<boolean>(true);

	useEffect(() => {
		fetch("/api/get-automatic-mode", {
			next: { revalidate: 1000 },
		})
			.then((data) => data.json())
			.then((data) => setIsAutomatic(data[0].isAutomatic));
	}, []);

	return (
		<main className="w-11/12 h-[90vh] mx-auto flex flex-col justify-center items-center gap-10 bg-white/20 rounded-3xl backdrop-blur-lg shadow-2xl">
			<h1 className="text-center text-2xl font-bold bg-gradient-to-br from-[#434343] to-black text-transparent bg-clip-text">
				Lamp Control
			</h1>
			<ToggleAutomatic
				isAutomatic={isAutomatic}
				setIsAutomatic={setIsAutomatic}
			/>
			<div className={`${!isAutomatic ? "visible" : "invisible"} flex`}>
				<span>On</span>
				<div></div>
				<span>Off</span>
			</div>
		</main>
	);
}
