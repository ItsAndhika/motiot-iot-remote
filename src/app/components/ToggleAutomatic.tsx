import ToggleAutomaticButton from "./ToggleAutomaticButton";

interface ToggleAutomaticProps {
	isAutomaticPromise: Response;
}

export default async function ToggleAutomatic({
	isAutomaticPromise,
}: ToggleAutomaticProps) {
	const result = await isAutomaticPromise.json();
	const isAutomatic = result[0].isAutomatic;

	return (
		<>
			<ToggleAutomaticButton isAutomatic={isAutomatic} />
		</>
	);
}
