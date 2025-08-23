"use client";

import { useLoading } from "@/contexts/LoadingContext";
import Loading from "@/components/ui/loading";

export default function LoadingOverlay() {
	const { isLoading } = useLoading();
	if (!isLoading) return null;
	return (
		<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
			<Loading />
		</div>
	);
}
