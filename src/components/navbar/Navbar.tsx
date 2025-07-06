"use client";

import LangSwitch from "@/components/switch/LanguageSwitch";
import { AveriaSerifLibre } from "@/styles/fonts";
import DropdownMenu from "../ui/profileExpand";
import profileContents from "@/constants/profileContents";

interface NavbarProps {
	sections: { id: string; title: string }[];
	activeSection: string;
}

export default function Navbar({ sections, activeSection }: NavbarProps) {
	return (
		<nav
			className={`${AveriaSerifLibre.className} fixed inset-x-0 top-2 z-5000 mx-auto mt-1.5 flex w-full max-w-7xl items-center justify-between px-6 py-3`}
		>
			<DropdownMenu
				title="Suttawit"
				icon="/dan1.jpg"
				content={profileContents}
			/>

			<nav className="max-w-max flex-1 items-center justify-center absolute top-1/2 left-1/2 hidden w-fit -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-md md:flex">
				<div style={{ position: "relative" }}>
					<ul className="group flex-1 list-none items-center justify-center gap-2 relative hidden rounded-full border border-black/10 bg-black/5 px-2 py-1 md:flex dark:border-white/10 dark:bg-white/10">
						{sections.map((s) => (
							<li key={s.id} className="relative group">
								<div
									className={`rounded-full transition-all duration-300 ease-in-out py-1
                                             ${
													activeSection === s.id
														? "bg-white/10"
														: "bg-transparent"
												}
                                        `}
								>
									<a
										href={`#${s.id}`}
										className={`px-4 py-2 rounded-full transition relative`}
									>
										{s.id.charAt(0).toUpperCase() +
											s.id.slice(1)}
										<span className="absolute left-1/2 top-[-8px] transform -translate-x-1/2 h-[4px] w-[32px] overflow-visible pointer-events-none">
											<span
												className={`block h-full w-full bg-[var(--foreground)] transition-transform duration-300 ease-in-out origin-center rounded-t-xl shadow-[rgba(255,255,255,0.8)] ${
													activeSection === s.id
														? "scale-x-100 opacity-100 shadow-[0_0_12px_#ffffff,0_0_24px_#ffffff,0_0_40px_#ffffff]"
														: "scale-x-0"
												}`}
											/>
										</span>
									</a>
								</div>
							</li>
						))}
					</ul>
				</div>
			</nav>
			<div className="flex items-center gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="size-8"
				>
					<path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
					<path
						fillRule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
						clipRule="evenodd"
					/>
				</svg>
				<LangSwitch />
			</div>
		</nav>
	);
}
