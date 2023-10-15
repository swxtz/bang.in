import Image from "next/image";
import { NavButtons } from "./NavButtons";

export function Navbar() {
	return (
		<nav className="bg-white mx-40 rounded-[20px] h-20 flex items-center">
			<div className="ml-10">
				<Image
					src="/logo.svg"
					alt="bang.in"
					priority
					quality={90}
					width={105}
					height={31}
				/>
			</div>

			<div className="">
				<NavButtons href="/" textColor="green">Home</NavButtons>
			</div>
		</nav>
	);
}
