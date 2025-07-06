export const getSections = (
	t: ReturnType<typeof import("next-intl").useTranslations>
) => [
	{
		id: "Home",
		title: t("sections.Home.name"),
          name: t("sections.Home.name"),
		subtitle: t("sections.Home.subtitle"),
		content: (
			<>
				<p className="animated-line text-xl md:text-2xl max-w-2xl mt-4">
					{t("sections.Home.content.description")}
				</p>
				<a
					href="#projects"
					className="animated-line mt-8 inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
				>
					{t("sections.Home.content.button")}
				</a>
			</>
		),
		bg: "bg-[#191919]",
	},
	{
		id: "projects",
		title: t("sections.projects.title"),
		subtitle: t("sections.projects.subtitle"),
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
		title: t("sections.interns.title"),
		subtitle: t("sections.interns.subtitle"),
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
          title: t("sections.education.title"),
          subtitle: t("sections.education.subtitle"),
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
		title: t("sections.contact.title"),
		subtitle: t("sections.contact.subtitle"),
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
