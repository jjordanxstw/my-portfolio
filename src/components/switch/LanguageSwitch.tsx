"use client";

import { useTransition } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import Image from "next/image";
import Loading from "../ui/loading";

export default function LanguageSwitch() {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();
	const currentLocale = params.locale as "en" | "th";
	const [isPending, startTransition] = useTransition();

	const toggleLanguage = () => {
		const newLocale = currentLocale === "en" ? "th" : "en";

		const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");

		const newPath = `/${newLocale}${pathWithoutLocale}`;

		startTransition(() => {
			router.push(newPath);
		});
	};

	return (
		<button
			onClick={toggleLanguage}
			className="relative w-20 h-10 rounded-full bg-[var(--foreground)] shadow-inner flex items-center justify-between px-3 text-gray-700 font-semibold transition-all"
			style={{
				boxShadow:
					"inset 4px 4px 8px #c5c5c5, inset -4px -4px 8px #ffffff",
			}}
		>
			<span className={`${currentLocale === "th" ? "text-black" : "opacity-50"}`}>
				TH
			</span>
			<span className={`${currentLocale === "en" ? "text-black" : "opacity-50"}`}>
				EN
			</span>

			<div
				className={`rounded-full overflow-hidden absolute w-8 h-8 bg-white top-1 left-1 shadow-md transition-all duration-300 ease-in-out flex items-center justify-center`}
				style={{
					transform:
						currentLocale === "th" ? "translateX(40px)" : "translateX(0px)",
				}}
			>
				<div className="w-5 h-5 rounded-full overflow-hidden justify-center flex items-center">
					<Image
						src={
							currentLocale === "th" ? "/thai.jpg" : "/uk.png"
						}
						alt="flag"
						width={20}
						height={20}
					/>
				</div>
			</div>

               {isPending ? <Loading/> : null}
		</button>
	);
}
