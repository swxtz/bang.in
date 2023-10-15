interface DisplayDataProps {
	number: string;
	data: string;
}

export function DisplayData({ number, data }: DisplayDataProps) {
	return (
		<div className="flex flex-col font-semibold">
			<span className="text-center text-dark-500 mt-3 text-5xl">{number}</span>
			<span className="text-[28px] text-dark-500 text-center whitespace-nowrap">{data}</span>
		</div>
	);
}