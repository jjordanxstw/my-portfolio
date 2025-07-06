import "../globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
	title: "jordan.dev",
};

export function generateStaticParams() {
	return [{ locale: "en" }, { locale: "th" }];
}

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={locale} className="scroll-smooth">
			<body className='antialiased'>
				<NextIntlClientProvider locale={locale}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}