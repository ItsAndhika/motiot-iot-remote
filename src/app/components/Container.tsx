// "use client";
// import { useState, useEffect } from "react";
import ToggleAutomatic from "./ToggleAutomatic";

export default function Container() {
	// const [response, setResponse] = useState<Response>();

	// const response = await fetch("/api/get-automatic-mode", {
	// 	cache: "no-store",
	// });

	// useEffect(() => {
	// 	fetch("/api/get-automatic-mode").then((data) => setResponse(data));
	// }, []);

	return (
		<main className="w-11/12 h-[90vh] mx-auto flex flex-col justify-center items-center gap-10 bg-white/20 rounded-3xl backdrop-blur-lg shadow-2xl">
			<h1 className="text-center text-2xl font-bold bg-gradient-to-br from-[#434343] to-black text-transparent bg-clip-text">
				Lamp Control
			</h1>
			<ToggleAutomatic />
		</main>
	);
}
