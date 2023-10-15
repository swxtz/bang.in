import { Navbar } from "@/components/Global/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

import HeroImg from "../../public/men_with_ecobag_say_hi_with_hands.svg";
import { DisplayData } from "@/components/Home/DisplayData/DisplayData";

export default function Home() {
	return (
		<main>
			<div className="bg-green-500 h-fit pb-32">
				<div className="pt-12">
					<Navbar />
				</div>

				<div className="mx-56 mt-24 grid grid-cols-2 gap-[92px]">
					<div className="">
						<h3 className="text-white text-[28px] font-semibold">
							Hi, Folks!
						</h3>
						<div className="min-w-[456px] max-w-[730px]">
							<h1 className="text-cream-500 text-5xl font-bold">
								Inovation Dedication and Sustainable Solution
							</h1>
							<div className="flex flex-col gap-6">
								<h2 className="text-white">
									Certainly! Our e-commerce store specializing
									in home recycling offers a wide range of
									products designed to make recycling at home
									easy, convenient, and effective. Our online
									shop features a carefully curated selection
									of items, from waste segregation bins to
									cardboard compactors, glass crushers, and
									plastic compacting machines. Additionally,
									we provide helpful guides and tips to assist
									our customers in adopting sustainable
									recycling practices in their homes. By
									choosing products from our e-commerce
									platform, customers are not only simplifying
									the recycling process but also actively
									contributing to environmental preservation.
								</h2>

								<Link
									href="/products"
									className="text-white font-semibold border-2 border-white rounded-xl w-fit px-5 py-2 transition-colors duration-200 hover:bg-white hover:text-green-500 hover:border-green-500"
								>
									View Details
								</Link>
							</div>
						</div>
					</div>
					<div className="">
						<Image src={HeroImg} alt="" />
					</div>
				</div>
			</div>

			<div className="flex justify-between mx-64 2xl:mx-[350px] mt-20">
				<DisplayData number="200+" data="Member" />
				<DisplayData number="20" data="Waste Bank" />
				<DisplayData number="50" data="Products" />
				<DisplayData number="150" data="Course Education" />
			</div>
		</main>
	);
}
