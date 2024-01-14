"use client";
import { useState, useEffect } from "react";
import ToggleAutomaticButton from "./ToggleAutomaticButton";

// interface ToggleAutomaticProps {
// 	response: Response;
// }

export default function ToggleAutomatic() {
	const [isAutomatic, setIsAutomatic] = useState();

	useEffect(() => {
		fetch("/api/get-automatic-mode")
			.then((data) => data.json())
			.then((data) => setIsAutomatic(data));
	}, []);
	// const result = await response.json();
	// const isAutomatic = result[0].isAutomatic;

	return (
		<>
			<ToggleAutomaticButton isAutomatic={isAutomatic} />
		</>
	);
}
