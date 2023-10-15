import { BestServicesCard } from "./BestServicesCard";

import HeartIcon from "@/assets/heart-icon.svg";
import healthIcon from "@/assets/health-icon.svg";
import trashCanIcon from "@/assets/trash-can-empty-icon.svg";

export function BestServices() {
	return (
		<div className="">
			<div className="text-center flex flex-col ">
				<span className="text-dark-500 text-2.5xl">Category</span>
				<span className="text-dark-500 text-4xl font-semibold">
					We Offer Best Service
				</span>
			</div>

			<div className="grid grid-cols-3 mx-40 mt-20">
				<BestServicesCard
					title="Information & Education"
					description="Built Wicket longer admire do barton vanity itself do in it."
					img={HeartIcon}
				/>
				<BestServicesCard
					title="Course & Training"
					description="Built Wicket longer admire do barton vanity itself do in it."
					img={healthIcon}
				/>
				<BestServicesCard
					title="Waste Recycling"
					description="Built Wicket longer admire do barton vanity itself do in it."
					img={trashCanIcon}
				/>
			</div>
		</div>
	);
}
