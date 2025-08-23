"use client";

import { createContext, useContext, useState } from "react";

type LoadingContextType = {
	isLoading: boolean;
	setLoading: (v: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType>({
	isLoading: false,
	setLoading: () => {},
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
	const [isLoading, setLoading] = useState(false);
	return (
		<LoadingContext.Provider value={{ isLoading, setLoading }}>
			{children}
		</LoadingContext.Provider>
	);
}

export function useLoading() {
	return useContext(LoadingContext);
}
