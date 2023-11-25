export default async function Container() {
	const response = await fetch(`http://localhost:3000/api/log`);
	const log = await response.json();

	return (
		<main className="w-full h-full flex justify-center items-center bg-white/20 rounded-3xl backdrop-blur-lg shadow-2xl">
			<h2 className="text-center">{log}</h2>
		</main>
	);
}
