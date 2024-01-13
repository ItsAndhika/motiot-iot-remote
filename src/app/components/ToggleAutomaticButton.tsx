"use client";
interface ToggleAutomaticButtonProps {
	isAutomatic: boolean;
}

export default function ToggleAutomaticButton({
	isAutomatic,
}: ToggleAutomaticButtonProps) {
	const handleSetFalse = async () => {
		const response = await fetch("/api/set-automatic-mode", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({ isAutomatic: false }),
		});
		const result = await response.json();
		console.log(result);
	};

	const handleSetTrue = async () => {
		const response = await fetch("/api/set-automatic-mode", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({ isAutomatic: true }),
		});
		const result = await response.json();
		console.log(result);
	};

	return (
		<>
			{isAutomatic ? (
				<button
					onClick={handleSetFalse}
					className="px-3 py-2 rounded-full bg-gradient-to-br from-[#434343] to-black text-white font-semibold text-xl transition-all duration-1000 hover:scale-105"
				>
					Switch to manual
				</button>
			) : (
				<button
					onClick={handleSetTrue}
					className="px-3 py-2 rounded-full bg-gradient-to-br from-[#434343] to-black text-white font-semibold text-xl transition-all duration-1000 hover:scale-105"
				>
					Switch to automatic
				</button>
			)}
		</>
	);
}
