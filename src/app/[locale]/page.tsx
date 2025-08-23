"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../globals.css";
import Navbar from "@/components/navbar/Navbar";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export const getSections = (
	t: ReturnType<typeof import("next-intl").useTranslations>
) => [
	{
		id: "home",
		content: (
			<div className="flex flex-col md:flex-row items-center justify-between w-full">
				<div className="flex-1 text-left">
					<h1 className="animated-line text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
						{t("sections.home.name")}
					</h1>
					<p className="animated-line text-lg md:text-xl opacity-80 mb-6">
						{t("sections.home.subtitle")}
					</p>
					<a
						href="#projects"
						className="animated-line mt-8 inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
					>
						{t("sections.home.content.button")}
					</a>
				</div>
				<div className="flex-1 px-4 justify-center flex items-center">
					<img
						src="/dan1.jpg"
						alt="Profile"
						className="rounded-full shadow-lg w-64 h-64 object-cover mx-auto md:mx-0"
					/>
				</div>
			</div>
		),
		bg: "bg-[#191919] bg-fixed bg-center bg-cover animated-bg",
	},
	{
		id: "projects",
		content: (
			<div className="grid gap-6 md:grid-cols-2 mt-6">
				{[1, 2, 3].map((i) => (
					<div
						key={i}
						className="animated-line bg-white rounded-xl shadow-lg overflow-hidden"
					>
						<div className="h-48 bg-gray-200"></div>
						<div className="p-4">
							<h3 className="font-semibold text-xl mb-2">
								{t(`sections.projects.project${i}.title`)}
							</h3>
							<p className="text-gray-600">
								{t(`sections.projects.project${i}.description`)}
							</p>
						</div>
					</div>
				))}
			</div>
		),
		bg: "bg-[#191919]",
	},
	{
		id: "interns",
		content: (
			<ul className="mt-6 space-y-4">
				{[1, 2].map((i) => (
					<li key={i} className="animated-line">
						<h4 className="font-semibold">
							{t(`sections.interns.intern${i}.title`)}
						</h4>
						<p className="text-gray-600">
							{t(`sections.interns.intern${i}.description`)}
						</p>
					</li>
				))}
			</ul>
		),
		bg: "bg-[#191919]",
	},
	{
		id: "education",
		content: (
			<ul className="mt-6 space-y-4">
				{[1, 2].map((i) => (
					<li key={i} className="animated-line">
						<h4 className="font-semibold">
							{t(`sections.education.degree${i}.title`)}
						</h4>
						<p className="text-gray-600">
							{t(`sections.education.degree${i}.description`)}
						</p>
					</li>
				))}
			</ul>
		),
		bg: "bg-[#191919]",
	},
	{
		id: "contact",
		content: (
			<form className="mt-6 space-y-4">
				<input
					type="text"
					placeholder={t("sections.contact.form.name")}
					className="animated-line w-full p-3 border border-gray-300 rounded"
				/>
				<input
					type="email"
					placeholder={t("sections.contact.form.email")}
					className="animated-line w-full p-3 border border-gray-300 rounded"
				/>
				<textarea
					placeholder={t("sections.contact.form.message")}
					className="animated-line w-full p-3 border border-gray-300 rounded"
				></textarea>
				<button
					type="submit"
					className="animated-line bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
				>
					{t("sections.contact.form.button")}
				</button>
			</form>
		),
		bg: "bg-[#191919]",
	},
];

const Section = ({
	section,
	refCallback,
}: {
	section: any;
	refCallback: (el: HTMLDivElement | null) => void;
}) => (
	<section
		ref={refCallback}
		id={section.id}
		className={`${section.bg} w-full flex flex-col items-center justify-center font-display py-10 md:py-20`}
	>
		<div className="w-full max-w-5xl py-40 px-6 mx-auto">
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
);

export default function home() {
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
				{sections.map((section, index) => (
					<Section
						key={section.id}
						section={section}
						refCallback={(el) => (sectionRefs.current[index] = el)}
					/>
				))}
			</main>
		</>
	);
}
