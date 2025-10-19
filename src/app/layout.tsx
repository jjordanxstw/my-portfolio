import "./globals.css";
import type { Metadata } from "next";
import { LoadingProvider } from "@/contexts/LoadingContext";
import LoadingOverlay from "@/components/LoadingOverlay";

export const metadata: Metadata = {
	title: "Suttawit - Full Stack Developer",
	description: "A passionate web developer specializing in 3D experiences, modern web technologies, and creative coding.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className="antialiased bg-[#0F0F0F] text-[#F5F5F5]">
				<LoadingProvider>
					<LoadingOverlay />
					{children}
				</LoadingProvider>
			</body>
		</html>
	);
}

