"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

gsap.registerPlugin(ScrollTrigger);

export const getSections = () => [
	{
		id: "home",
		title: "",
		subtitle: "",
		content: (
			<div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
				<div className="flex-1 text-left">
					<h1 className="animated-line text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
						Hi, I'm Suttawit
					</h1>
					<p className="animated-line text-xl md:text-2xl opacity-90 mb-4">
						Full Stack Developer & Creative Technologist
					</p>
					<p className="animated-line text-lg md:text-xl opacity-70 mb-8">
						Crafting immersive digital experiences with Three.js, GSAP, and modern web technologies
					</p>
					<div className="flex gap-4">
						<a
							href="#projects"
							className="animated-line inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all duration-200 hover:scale-110 hover:shadow-2xl shadow-lg active:scale-95"
							style={{
								transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
							}}
						>
							View My Work
						</a>
						<a
							href="#contact"
							className="animated-line inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-200 hover:scale-110 active:scale-95"
							style={{
								transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
							}}
						>
							Get In Touch
						</a>
					</div>
				</div>
				<div className="flex-1 px-4 justify-center flex items-center">
					<div className="relative">
						<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-30"></div>
						<img
							src="/dan1.jpg"
							alt="Profile"
							className="relative rounded-full shadow-2xl w-80 h-80 object-cover mx-auto border-4 border-white/10"
						/>
					</div>
				</div>
			</div>
		),
		bg: "bg-gradient-to-br from-[#0F0F0F] via-[#1a1a1a] to-[#0F0F0F]",
	},
	{
		id: "about",
		title: "About Me",
		subtitle: "Passionate developer with a creative mindset",
		content: (
			<div className="grid gap-8 md:grid-cols-2">
				<div className="animated-line space-y-6">
					<p className="text-lg opacity-90 leading-relaxed">
						I'm a full-stack developer with a passion for creating beautiful, 
						interactive web experiences. My journey in web development started 
						with a curiosity about how things work on the web, and has evolved 
						into a deep love for crafting pixel-perfect designs and smooth animations.
					</p>
					<p className="text-lg opacity-90 leading-relaxed">
						I specialize in React, Next.js, Three.js, and modern CSS frameworks. 
						I believe in writing clean, maintainable code and creating experiences 
						that delight users.
					</p>
				</div>
				<div className="animated-line space-y-4">
					<h3 className="text-2xl font-semibold mb-4">Quick Facts</h3>
					<ul className="space-y-3">
						<li className="flex items-center gap-3">
							<span className="text-2xl">🎓</span>
							<span className="opacity-90">Computer Science Graduate</span>
						</li>
						<li className="flex items-center gap-3">
							<span className="text-2xl">💼</span>
							<span className="opacity-90">3+ Years Experience</span>
						</li>
						<li className="flex items-center gap-3">
							<span className="text-2xl">🌍</span>
							<span className="opacity-90">Based in Thailand</span>
						</li>
						<li className="flex items-center gap-3">
							<span className="text-2xl">☕</span>
							<span className="opacity-90">Coffee Enthusiast</span>
						</li>
					</ul>
				</div>
			</div>
		),
		bg: "bg-[#0F0F0F]",
	},
	{
		id: "skills",
		title: "Skills & Technologies",
		subtitle: "Tools and technologies I work with",
		content: (
			<div className="grid gap-6 md:grid-cols-3 mt-6">
				{[
					{
						category: "Frontend",
						skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "GSAP", "Framer Motion"],
					},
					{
						category: "Backend",
						skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "REST APIs"],
					},
					{
						category: "Tools & Others",
						skills: ["Git", "Docker", "Figma", "VS Code", "Vercel", "AWS", "CI/CD"],
					},
				].map((item, i) => (
					<div
						key={i}
						className="animated-line bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-200 hover:scale-105 hover:-translate-y-2"
						style={{
							transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
						}}
					>
						<h3 className="font-semibold text-2xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
							{item.category}
						</h3>
						<ul className="space-y-3">
							{item.skills.map((skill, idx) => (
								<li key={idx} className="flex items-center gap-3">
									<div className="w-2 h-2 rounded-full bg-white"></div>
									<span className="text-gray-300">{skill}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		),
		bg: "bg-[#0F0F0F]",
	},
	{
		id: "projects",
		title: "Featured Projects",
		subtitle: "Some of my best work",
		content: (
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
				{[
					{
						title: "3D Portfolio Website",
						description: "An immersive 3D portfolio built with Three.js and React Three Fiber, featuring interactive models and smooth animations.",
						tech: ["Three.js", "React", "GSAP"],
						color: "from-purple-500 to-pink-500",
					},
					{
						title: "E-Commerce Platform",
						description: "Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard.",
						tech: ["Next.js", "Stripe", "PostgreSQL"],
						color: "from-blue-500 to-cyan-500",
					},
					{
						title: "Real-time Chat App",
						description: "A modern chat application with WebSocket support, file sharing, and end-to-end encryption.",
						tech: ["React", "Socket.io", "Node.js"],
						color: "from-green-500 to-emerald-500",
					},
					{
						title: "AI Image Generator",
						description: "Web app that generates images from text prompts using AI APIs with a beautiful gallery interface.",
						tech: ["Next.js", "OpenAI", "Tailwind"],
						color: "from-orange-500 to-red-500",
					},
					{
						title: "Task Management System",
						description: "Collaborative task management tool with drag-and-drop, real-time updates, and team features.",
						tech: ["React", "TypeScript", "MongoDB"],
						color: "from-indigo-500 to-purple-500",
					},
					{
						title: "Weather Dashboard",
						description: "Beautiful weather dashboard with interactive maps, forecasts, and data visualizations.",
						tech: ["React", "D3.js", "Weather API"],
						color: "from-yellow-500 to-orange-500",
					},
				].map((project, i) => (
					<div
						key={i}
						className="animated-line bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-200 hover:scale-105 hover:-translate-y-2 group cursor-pointer"
						style={{
							transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
						}}
					>
						<div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
							<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
						</div>
						<div className="p-6">
							<h3 className="font-semibold text-xl mb-3">
								{project.title}
							</h3>
							<p className="text-gray-400 mb-4">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, idx) => (
									<span
										key={idx}
										className="px-3 py-1 bg-white/10 rounded-full text-sm"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		),
		bg: "bg-[#0F0F0F]",
	},
	{
		id: "experience",
		title: "Work Experience",
		subtitle: "My professional journey",
		content: (
			<div className="mt-8 space-y-6">
				{[
					{
						title: "Senior Frontend Developer",
						company: "Tech Innovations Co.",
						period: "2023 - Present",
						description: "Leading frontend development team, architecting scalable React applications, and mentoring junior developers.",
						achievements: [
							"Improved app performance by 40%",
							"Led migration to Next.js 14",
							"Implemented design system",
						],
					},
					{
						title: "Full Stack Developer",
						company: "Creative Digital Agency",
						period: "2022 - 2023",
						description: "Developed custom web solutions for clients, focusing on interactive experiences and modern web technologies.",
						achievements: [
							"Built 15+ client projects",
							"Introduced Three.js pipeline",
							"Achieved 98% client satisfaction",
						],
					},
					{
						title: "Frontend Developer Intern",
						company: "StartUp Labs",
						period: "2021 - 2022",
						description: "Contributed to building an MVP for a SaaS product, learned modern development practices and agile methodologies.",
						achievements: [
							"Developed key UI components",
							"Collaborated with design team",
							"Participated in code reviews",
						],
					},
				].map((exp, i) => (
					<div
						key={i}
						className="animated-line bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-200 hover:translate-x-2"
						style={{
							transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
						}}
					>
						<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
							<div>
								<h3 className="font-semibold text-2xl mb-2">
									{exp.title}
								</h3>
								<p className="text-xl text-gray-400">{exp.company}</p>
							</div>
							<span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
						</div>
						<p className="text-gray-300 mb-4">{exp.description}</p>
						<ul className="space-y-2">
							{exp.achievements.map((achievement, idx) => (
								<li key={idx} className="flex items-start gap-3">
									<span className="text-green-400 mt-1">✓</span>
									<span className="text-gray-400">{achievement}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		),
		bg: "bg-[#0F0F0F]",
	},
	{
		id: "contact",
		title: "Let's Connect",
		subtitle: "Get in touch for collaborations or just to say hi!",
		content: (
			<div className="grid md:grid-cols-2 gap-12 mt-8">
				<div className="space-y-6">
					<div className="animated-line">
						<h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
						<form className="space-y-4">
							<input
								type="text"
								placeholder="Your Name"
								className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:outline-none transition-all text-white placeholder-gray-500"
							/>
							<input
								type="email"
								placeholder="Your Email"
								className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:outline-none transition-all text-white placeholder-gray-500"
							/>
							<textarea
								placeholder="Your Message"
								rows={5}
								className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:outline-none transition-all text-white placeholder-gray-500"
							></textarea>
							<button
								type="submit"
								className="w-full bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all duration-200 hover:scale-105 hover:shadow-2xl active:scale-95"
								style={{
									transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
								}}
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
				<div className="space-y-6">
					<div className="animated-line">
						<h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
						<div className="space-y-4">
							<a
								href="mailto:suttawit@example.com"
								className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-200 hover:translate-x-2 group"
								style={{
									transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
								}}
							>
								<div className="text-2xl">📧</div>
								<div>
									<p className="text-sm text-gray-400">Email</p>
									<p className="group-hover:text-white transition-colors">suttawit@example.com</p>
								</div>
							</a>
							<a
								href="tel:+66123456789"
								className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-200 hover:translate-x-2 group"
								style={{
									transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
								}}
							>
								<div className="text-2xl">📱</div>
								<div>
									<p className="text-sm text-gray-400">Phone</p>
									<p className="group-hover:text-white transition-colors">+66 123 456 789</p>
								</div>
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-200 hover:translate-x-2 group"
								style={{
									transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
								}}
							>
								<div className="text-2xl">💼</div>
								<div>
									<p className="text-sm text-gray-400">LinkedIn</p>
									<p className="group-hover:text-white transition-colors">linkedin.com/in/suttawit</p>
								</div>
							</a>
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-200 hover:translate-x-2 group"
								style={{
									transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
								}}
							>
								<div className="text-2xl">💻</div>
								<div>
									<p className="text-sm text-gray-400">GitHub</p>
									<p className="group-hover:text-white transition-colors">github.com/suttawit</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		),
		bg: "bg-[#0F0F0F]",
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
		className={`${section.bg} w-full flex flex-col items-center justify-center font-display py-10 md:py-20 relative`}
	>
		<div className="w-full max-w-6xl py-20 px-6 mx-auto">
			{section.title && (
				<div className="text-center mb-16">
					<h1 className="animated-line text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
						{section.title}
					</h1>
					<p className="animated-line text-xl md:text-2xl max-w-3xl mx-auto opacity-70">
						{section.subtitle}
					</p>
				</div>
			)}
			<div className="w-full">{section.content}</div>
		</div>
	</section>
);

export default function Home() {
	const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [activeSection, setActiveSection] = useState("home");
	const sections = getSections();

	useEffect(() => {
		const lines = document.querySelectorAll(".animated-line");
		
		// Improved animation with faster, snappier motion
		lines.forEach((line, i) => {
			gsap.fromTo(
				line,
				{ 
					opacity: 0, 
					y: 50,
					scale: 0.95,
				},
				{
					opacity: 1,
					y: 0,
					scale: 1,
					delay: i * 0.02,
					duration: 0.5,
					ease: "power4.out",
					scrollTrigger: {
						trigger: line,
						start: "top 90%",
						end: "bottom 20%",
						toggleActions: "play none none reverse",
						once: false,
					},
				}
			);
		});

		// Add parallax effect to sections
		sectionRefs.current.forEach((section) => {
			if (!section) return;
			
			gsap.fromTo(
				section,
				{ 
					y: 100,
					opacity: 0.5,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out",
					scrollTrigger: {
						trigger: section,
						start: "top 95%",
						end: "top 20%",
						scrub: 0.5,
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
			<main className="relative">
				{sections.map((section, index) => (
					<Section
						key={section.id}
						section={section}
						refCallback={(el) => (sectionRefs.current[index] = el)}
					/>
				))}
			</main>
			<footer className="bg-[#0F0F0F] border-t border-white/10 py-12">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<p className="text-gray-400 mb-4">
						Designed & Built by Suttawit
					</p>
					<p className="text-gray-500 text-sm">
						© 2024 All rights reserved.
					</p>
				</div>
			</footer>
		</>
	);
}

