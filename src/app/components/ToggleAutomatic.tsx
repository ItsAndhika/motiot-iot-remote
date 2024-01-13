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
			<div className={`${!isAutomatic ? "visible" : "invisible"} flex`}>
				<span>On</span>
				<div></div>
				<span>Off</span>
			</div>
		</>
	);
}
