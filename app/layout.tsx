import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Car Rental",
	description: "Car Rental App",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en" data-theme="light">
				<body className={inter.className}>
					<NavBar />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
