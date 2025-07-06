export const sections = [
		{
			id: "Home",
			title: "Hi, I'm Psych",
			subtitle: "Creative Web Developer who loves 3D and motion.",
			content: (
				<>
					<p className="animated-line text-xl md:text-2xl max-w-2xl mt-4">
						I build immersive web experiences using Three.js, GSAP,
						and React.
					</p>
					<a
						href="#projects"
						className="animated-line mt-8 inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
					>
						See My Work
					</a>
				</>
			),
			bg: "bg-[#191919]",
		},
		{
			id: "projects",
			title: "Projects",
			subtitle: "Here are some of my featured works.",
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
									Project {i}
								</h3>
								<p className="text-gray-600">
									Description of project {i} goes here.
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
			title: "Internships",
			subtitle: "Experience gained from real-world challenges.",
			content: (
				<ul className="mt-6 space-y-4">
					<li className="animated-line">
						<h4 className="font-semibold">
							Frontend Intern at ABC Company
						</h4>
						<p className="text-gray-600">
							Worked with React, Tailwind, and integrated APIs.
						</p>
					</li>
					<li className="animated-line">
						<h4 className="font-semibold">
							3D Developer Intern at XYZ Studio
						</h4>
						<p className="text-gray-600">
							Created interactive models using Three.js and
							Blender.
						</p>
					</li>
				</ul>
			),
			bg: "bg-[#191919]",
		},
		{
			id: "education",
			title: "Education",
			subtitle: "My academic journey and achievements.",
			content: (
				<div className="mt-6 space-y-4">
					<div className="animated-line">
						<h4 className="font-semibold">
							B.Sc. in Computer Science – ABC University
						</h4>
						<p className="text-gray-600">2020–2024 | GPA: 3.85</p>
					</div>
					<div className="animated-line">
						<h4 className="font-semibold">
							Online Course: 3D Web Dev with Three.js
						</h4>
						<p className="text-gray-600">
							Udemy – Completed in 2023
						</p>
					</div>
				</div>
			),
			bg: "bg-[#191919]",
		},
		{
			id: "contact",
			title: "Contact Me",
			subtitle: "Let's create something great together.",
			content: (
				<form className="mt-6 max-w-md w-full text-left">
					<input
						type="text"
						placeholder="Your Name"
						className="animated-line w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400"
					/>
					<input
						type="email"
						placeholder="Your Email"
						className="animated-line w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400"
					/>
					<textarea
						placeholder="Your Message"
						rows={5}
						className="animated-line w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400"
					></textarea>
					<button
						type="submit"
						className="animated-line bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-300"
					>
						Send Message
					</button>
				</form>
			),
			bg: "bg-[#191919]",
		},
	];