import { Averia_Serif_Libre, Sarabun } from "next/font/google";

export const AveriaSerifLibre = Averia_Serif_Libre({
	subsets: ["latin"],
	weight: ["300"],
	variable: "--font-averia-serif-libre",
	display: "swap",
});

export const SarabunFont = Sarabun({
     subsets: ["latin"],
     weight: ["300"],
     variable: "--font-sarabun",
     display: "swap",
});