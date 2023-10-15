import Link from "next/link";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

interface NavButtonsProps {
	children: ReactNode;
	href: string;
	textColor?: "grey" | "green" | "login";
}

const link = tv({
	base: "font-normal text-xl transition-colors duration-200",
	variants: {
		textColor: {
			grey: "text-gray-700 hover:text-gray-800",
			green: "text-vs-green-500 font-semibold hover:text-vs-green-400",
			login: "px-5 py-2 rounded-xl font-semibold text-base bg-vs-green-500 hover:bg-vs-green-400 text-white"
		},
	},
});

// font-semibold text-xl text-vs-green-500
export function NavButtons({
	children,
	href,
	textColor = "grey",
}: NavButtonsProps) {
	return (
		<Link href={href} className={link({ textColor })}>
			{children}
		</Link>
	);
}
