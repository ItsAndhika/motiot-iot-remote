import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Motiot",
	description: "A web based IoT remote",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} w-full h-screen bg-gradient-to-br from-[#8360c3] to-[#2ebf91] p-10`}
			>
				{children}
			</body>
		</html>
	);
}
