"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../globals.css";
import Navbar from "@/components/navbar/Navbar";
import { getSections } from "@/constants/getSections"; 
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [activeSection, setActiveSection] = useState("hero");

     const t = useTranslations();
     const sections = getSections(t);

	useEffect(() => {
		const lines = document.querySelectorAll(".animated-line");
		lines.forEach((line, i) => {
			gsap.fromTo(
				line,
				{ opacity: 0, x: -40 },
				{
					opacity: 1,
					x: 0,
					delay: i * 0.1,
					duration: 0.6,
					scrollTrigger: {
						trigger: line,
						start: "top 90%",
						toggleActions: "play none none reverse",
					},
				}
			);
		});

		const handleScroll = () => {
			sectionRefs.current.forEach((section) => {
				if (!section) return;
				const rect = section.getBoundingClientRect();
				if (rect.top <= 150 && rect.bottom >= 150) {
					setActiveSection(section.id);
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<Navbar activeSection={activeSection} sections={sections} />
			<main>
				{sections.map((section, i) => (
					<section
						key={section.id}
						ref={(el) => {
							sectionRefs.current[i] =
								el as HTMLDivElement | null;
						}}
						id={section.id}
						className={`${section.bg} w-full flex flex-col items-center justify-center font-display py-24`}
					>
						<div className="w-full max-w-7xl py-40 px-6 mx-auto">
							<div className="text-center mb-12">
								<h1 className="animated-line text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
									{section.title}
								</h1>
								<p className="animated-line text-lg md:text-xl max-w-2xl mx-auto opacity-80 mb-6">
									{section.subtitle}
								</p>
							</div>
							<div className="w-full">{section.content}</div>
						</div>
					</section>
				))}
			</main>
		</>
	);
}