import Image from "next/image";
import { NavButtons } from "./NavButtons";
import Link from "next/link";

export function Navbar() {
	return (
		<nav className="bg-white mx-40 px-10 rounded-[20px] h-20 flex items-center justify-between">
			<div className="">
				<Link href="/">
					<Image
						src="/logo.svg"
						alt="bang.in"
						priority
						quality={90}
						width={105}
						height={31}
					/>
				</Link>
			</div>

			<div className="flex gap-12">
				<NavButtons href="/" textColor="green">
					Home
				</NavButtons>
				<NavButtons href="/service" textColor="grey">
					Service
				</NavButtons>
				<NavButtons href="/product" textColor="grey">
					Product
				</NavButtons>
				<NavButtons href="/about" textColor="grey">
					About
				</NavButtons>
			</div>

			<div className="">
				<NavButtons href="/login" textColor="login">Register</NavButtons>
			</div>
		</nav>
	);
}
