"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronDownIcon, ChevronUp } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface DropdownContentItem {
	content: string;
	icon?: React.ReactNode;
	url?: string;
}

interface DropdownItem {
	title: string;
	icon?: string;
	content: DropdownContentItem[];
}

export default function DropdownMenu({ title, icon, content }: DropdownItem) {
	const [isHovered, setIsHovered] = useState(false);
	const router = useRouter();

	return (
		<div
			className="relative rounded-full"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<motion.button
				className={`flex items-center gap-3 text-white text-left transition-all hover:bg-white/10 rounded-full group backdrop-blur-sm`}
				animate={{
					width: isHovered ? "auto" : "52px",
					paddingRight: isHovered ? "16px" : "14px",
				}}
				transition={{
					duration: 0.1,
					ease: "easeInOut",
				}}
			>
				{icon && (
					<div className="relative">
						<div className="w-10 h-10 rounded-full overflow-hidden shadow-lg">
							<Image
								src={icon}
								alt=""
								width={24}
								height={24}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				)}

                    <motion.span
                         className="text-sm font-medium whitespace-nowrap"
                         initial={{ opacity: 0, width: 0 }}
                         animate={{
                              opacity: !isHovered ? 1 : 0,
                              width: !isHovered ? "auto" : 0,
                         }}
                         transition={{
                              duration: 0.1,
                              ease: "easeOut",
                         }}
                    >
                         <ChevronDownIcon className="text-white/70" size={20} />
                    </motion.span>

				<motion.span
					initial={{ opacity: 0, width: 0 }}
					animate={{
						opacity: isHovered ? 1 : 0,
						width: isHovered ? "auto" : 0,
					}}
					transition={{
						duration: 0.1,
						ease: "easeOut",
					}}
				>
					{title}
				</motion.span>

				<motion.div
					initial={{ opacity: 0, x: -10, rotate: 0 }}
					animate={{
						opacity: isHovered ? 1 : 0,
						x: isHovered ? 0 : -10,
						rotate: isHovered ? 180 : 0,
					}}
					transition={{
						duration: 0.1,
						ease: "easeOut",
					}}
				>
					<ChevronDown className="text-white/70" size={20} />
				</motion.div>
			</motion.button>

			<div></div>

			<AnimatePresence>
				{isHovered && (
					<>
						<div className="absolute top-full left-0 right-0 h-2 bg-transparent z-40" />

						<motion.div
							className="absolute top-full left-0 right-0 mt-2 backdrop-blur-md overflow-hidden z-50 rounded-xl shadow-2xl border border-white/10"
							initial={{
								maxHeight: 0,
								opacity: 0,
								y: -5,
								scale: 0.95,
							}}
							animate={{
								maxHeight: content.length * 60,
								opacity: 1,
								y: 0,
								scale: 1,
							}}
							exit={{
								maxHeight: 0,
								opacity: 0,
								y: -10,
								scale: 0.95,
							}}
							transition={{
								duration: 0.1,
								ease: "easeInOut",
							}}
						>
							<ul className="py-2">
								{content.map((sub, i) => (
									<motion.li
										key={i}
										className="px-4 py-3 hover:bg-white/5 transition-all cursor-pointer flex items-center gap-3 mx-2 rounded-lg"
										initial={{ opacity: 0, x: -30 }}
										animate={{
											opacity: 1,
											x: 0,
										}}
										transition={{
											duration: i * 0.05,
                                                       delay: 0.05,
											ease: "easeOut",
										}}
										whileHover={{
											backgroundColor:
												"rgba(255,255,255,0.1)",
											paddingLeft: "20px",
										}}
										onClick={() => {
											if (sub.url) {
												window.open(
													sub.url,
													"_blank",
													"noopener,noreferrer"
												);
											}
										}}
									>
										<span className="text-white/90 font-medium flex items-center">
                                                       {sub.icon && (
                                                            <span className="mr-2">
                                                                 {sub.icon}
                                                            </span>
                                                       )}
											{sub.content}
										</span>
									</motion.li>
								))}
							</ul>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
}
