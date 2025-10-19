"use client";
import useMountAnimation from "@/hooks/mountAnimation";
import NavbarSectionList from "@/components/navbar/NavbarSection";
import { AveriaSerifLibre } from "@/styles/fonts";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
	sections: { id: string }[];
	activeSection: string;
}

export default function Navbar({ sections, activeSection }: NavbarProps) {
	const mounted = useMountAnimation();
	const [clipped, setClipped] = useState(true);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
		<nav
			className={`
        ${AveriaSerifLibre.className}
        fixed inset-x-0 top-0 z-5000 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 flex-nowrap
        transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
        origin-center backdrop-blur-lg bg-black/30 border border-white/10
        lg:rounded-full lg:mt-4 lg:border
        max-lg:border-b max-lg:border-t-0 max-lg:border-l-0 max-lg:border-r-0 max-lg:mt-0 max-lg:rounded-none
        ${mounted ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
      `}
				style={{
					opacity: mounted ? 1 : 0,
					clipPath: clipped
						? mounted
							? "inset(0% 0% 0% 0%)"
							: "inset(0% 50% 0% 50%)"
						: "none",
					transformOrigin: "center",
					overflow: "visible",
				}}
				onTransitionEnd={(e) => {
					if (e.propertyName === "clip-path") setClipped(false);
				}}
			>
				{/* Profile Picture and Name */}
				<div className="flex items-center gap-3 flex-shrink-0">
					<div className="w-10 h-10 rounded-full overflow-hidden">
						<img
							src="/dan1.jpg"
							alt="Profile"
							width={40}
							height={40}
							className="w-full h-full object-cover"
						/>
					</div>
					<span className="text-white font-medium hidden sm:block">Suttawit</span>
				</div>

				{/* Desktop Navigation */}
				<nav className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex">
					<div className="flex items-center justify-center">
						<NavbarSectionList
							sections={sections}
							activeSection={activeSection}
						/>
					</div>
				</nav>

				{/* Right Side - Resume Button and Social Icons */}
				<div className="flex items-center gap-3 flex-shrink-0">
					{/* Desktop Resume Button */}
					<a
						href="/resume.pdf"
						download
						className="hidden lg:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 border border-white/20 hover:border-white/40"
						style={{
							transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
							<polyline points="7 10 12 15 17 10" />
							<line x1="12" y1="15" x2="12" y2="3" />
						</svg>
						<span className="text-sm font-medium">Resume</span>
					</a>
					<a
						href="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:scale-110 transition-transform"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="text-white/80 hover:text-white"
						>
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
						</svg>
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:scale-110 transition-transform"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="text-white/80 hover:text-white"
						>
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
						</svg>
					</a>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMobileMenu}
						className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-all"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="text-white"
						>
							{isMobileMenuOpen ? (
								<path d="M18 6L6 18M6 6l12 12" />
							) : (
								<path d="M3 12h18M3 6h18M3 18h18" />
							)}
						</svg>
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}
						className="fixed top-16 left-0 right-0 z-4000 bg-black/95 backdrop-blur-lg border-b border-white/10"
					>
						<div className="max-w-6xl mx-auto px-6 py-6">
							<div className="flex flex-col gap-4">
								{/* Navigation Links */}
								<div className="flex flex-col gap-2">
									{sections.map((section) => (
										<a
											key={section.id}
											href={`#${section.id}`}
											className={`px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white/10 ${
												activeSection === section.id
													? "bg-white/20 text-white"
													: "text-white/70 hover:text-white"
											}`}
											onClick={() => setIsMobileMenuOpen(false)}
										>
											<span className="capitalize font-medium">
												{section.id}
											</span>
										</a>
									))}
								</div>

								{/* Resume Button */}
								<a
									href="/resume.pdf"
									download
									className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 border border-white/20 hover:border-white/40"
									style={{
										transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
									}}
									onClick={() => setIsMobileMenuOpen(false)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
										<polyline points="7 10 12 15 17 10" />
										<line x1="12" y1="15" x2="12" y2="3" />
									</svg>
									<span className="font-medium">Download Resume</span>
								</a>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
