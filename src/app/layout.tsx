import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/database";

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
				className={`${inter.className} w-full h-screen max-h-screen flex justify-center items-center`}
			>
				{children}
			</body>
		</html>
	);
}
