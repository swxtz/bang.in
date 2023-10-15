import Image from "next/image";

interface BestServicesCardProps {
	img: string;
	title: string;
	description: string;
}

export function BestServicesCard({
	img,
	title,
	description,
}: BestServicesCardProps) {
	return (
		<div className="py-11 w-[333px] shadow-md rounded-3xl">
			<Image src={img} alt={title} className="mb-8 mx-auto" />
			<div className="flex flex-col text-center">
				<span className="text-grey-500 font-semibold text-xl">
					{title}
				</span>
				<span className="w-[181px] text-center mx-auto">{description}</span>
			</div>
		</div>
	);
}
