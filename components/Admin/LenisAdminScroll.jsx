"use client";
import { useEffect, useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import Lenis from "@studio-freight/lenis";

export default function LenisAdminScroll({ children }) {
	const wrapperRef = useRef(null);
	const contentRef = useRef(null);
	const lenisRef = useRef(null);

	useEffect(() => {
		if (!wrapperRef.current || !contentRef.current) return;
		const lenis = new Lenis({
			wrapper: wrapperRef.current,
			content: contentRef.current,
			smoothWheel: true,
			lerp: 0.1,
			duration: 1.1,
		});
		lenisRef.current = lenis;
		return () => {
			lenis.destroy();
		};
	}, []);

	useAnimationFrame((time) => {
		lenisRef.current?.raf(time);
	});

	return (
		<main
			ref={wrapperRef}
			className="flex-1 h-[calc(100vh-4rem)] overflow-auto"
		>
			<div ref={contentRef} className="p-4 pr-10">
				{children}
			</div>
		</main>
	);
}
