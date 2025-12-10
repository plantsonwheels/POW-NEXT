"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutShell({ children }) {
	const pathname = usePathname();
	const lenisRef = useRef(null);
	useEffect(() => {
		const lenis = new Lenis({ duration: 1.1, smoothWheel: true, lerp: 0.1 });
		lenisRef.current = lenis;
		return () => {
			lenis.destroy();
		};
	}, []);
	useAnimationFrame((time) => {
		lenisRef.current?.raf(time);
	});
	const isAdmin = pathname?.startsWith("/admin");
	if (isAdmin) return <>{children}</>;
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
