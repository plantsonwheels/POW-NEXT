import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import WhatsAppButton from "@/components/WhatsAppButton";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
	title: "Plants on Wheels",
	description:
		"Bringing nature to your doorstep. Curated plant delivery and professional gardening services for homes, offices, and communities across India.",
	keywords:
		"plants, gardening, plant delivery, indoor plants, outdoor plants, garden design, gardener services",
	openGraph: {
		title: "Plants on Wheels",
		description:
			"Bringing nature to your doorstep. Premium plant delivery and gardening services.",
		url: "https://plantsonwheels.com",
		siteName: "Plants on Wheels",
		images: [
			{
				url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/green-scooter-plants-delivery-service-RCLT76cP3azuFbEI8P6kwbG4XROvCA.jpg",
				width: 1200,
				height: 630,
			},
		],
		type: "website",
	},
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	themeColor: "#059669",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.className} ${geistMono.className}`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem={false}
				>
					<LayoutShell>{children}</LayoutShell>
				</ThemeProvider>
			</body>
		</html>
	);
}
