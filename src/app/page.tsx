import { Navbar } from "@/components/global/navbar/Navbar";

export default function Home() {
	return (
		<main className="bg-green-500 h-[1000px]">
			<div className="pt-12">
				<Navbar />
			</div>

			<div className="mx-56 mt-24">
				<div className="">
					<h3 className="text-white text-[28px] font-semibold">Hi, Folks!</h3>
					<h1 className="">Inovation Dedication and Sustainable Solution</h1>
					<h2>
						Certainly! Our e-commerce store specializing in home
						recycling offers a wide range of products designed to
						make recycling at home easy, convenient, and effective.
						Our online shop features a carefully curated selection
						of items, from waste segregation bins to cardboard
						compactors, glass crushers, and plastic compacting
						machines. Additionally, we provide helpful guides and
						tips to assist our customers in adopting sustainable
						recycling practices in their homes. By choosing products
						from our e-commerce platform, customers are not only
						simplifying the recycling process but also actively
						contributing to environmental preservation.
					</h2>
				</div>
			</div>
		</main>
	);
}
