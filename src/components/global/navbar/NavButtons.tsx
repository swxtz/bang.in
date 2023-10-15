import Link from "next/link";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

interface NavButtonsProps {
	children: ReactNode;
	href: string;
	textColor?: "grey" | "green";
}

const link = tv({
	base: "font-normal text-xl ",
	variants: {
		textColor: {
			grey: "text-gray-700 hover:text-gray-800",
			green: "text-vs-green-500 font-semibold hover:text-green-600",
		}
	}
});

// font-semibold text-xl text-vs-green-500
export function NavButtons({ children, href, textColor = "grey" }: NavButtonsProps) {
	return (
		<Link href={href} className={link({ textColor })}>
			{children}
		</Link>
	);
}
