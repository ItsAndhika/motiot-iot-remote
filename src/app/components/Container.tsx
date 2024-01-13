import ToggleAutomatic from "./ToggleAutomatic";

export default async function Container() {
	const response = await fetch(
		"https://motiot.vercel.app/api/get-automatic-mode",
		{
			cache: "no-store",
		}
	);

	return (
		<main className="w-11/12 h-[90vh] mx-auto flex flex-col justify-center items-center gap-10 bg-white/20 rounded-3xl backdrop-blur-lg shadow-2xl">
			<h1 className="text-center text-2xl font-bold bg-gradient-to-br from-[#434343] to-black text-transparent bg-clip-text">
				Lamp Control
			</h1>
			<ToggleAutomatic isAutomaticPromise={response} />
		</main>
	);
}
