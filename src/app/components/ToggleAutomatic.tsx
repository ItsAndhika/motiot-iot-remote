import ToggleAutomaticButton from "./ToggleAutomaticButton";

interface ToggleAutomaticProps {
	response: Response;
}

export default async function ToggleAutomatic({
	response,
}: ToggleAutomaticProps) {
	const result = await response.json();
	const isAutomatic = result[0].isAutomatic;

	return (
		<>
			<ToggleAutomaticButton isAutomatic={isAutomatic} />
		</>
	);
}
