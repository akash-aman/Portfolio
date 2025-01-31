import "/styles/fonts.scss";
import "/styles/globals.scss";
import "/styles/styles.scss";
import "/styles/theme.scss";

import ApplyTheme from "/features/theme";
import Navigation from "/components/navigation";
import Layout from "../layouts/basiclayout";
import { HeaderProvider } from "/contexts/headercontext";
import { RegisterPWA } from "./register-pwa";
import { Metadata } from "next";
import { baseURL } from "/lib/constant";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Poppins } from "next/font/google";

const webFont = Poppins({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-content",
	preload: true,
});

const headFont = Poppins({
	subsets: ["latin"],
	weight: "900",
	variable: "--font-heading",
	preload: true,
});

const svgFont = Poppins({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-svg",
	preload: false,
});

const codeFont = Poppins({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-code",
	preload: false,
});

/**
 * This is the metadata for the page.
 */
export const metadata: Metadata = {
	title: {
		template: "%s | Akash Aman",
		default: "Akash Aman | Full Stack Dev",
	},
	metadataBase: new URL(baseURL),
	description:
		"Welcome to the captivating realm of Akash Aman. Witness the fusion of art and technology in this Full Stack Developer's portfolio. Immerse yourself in a symphony of elegant full stack sorcery, and transformative web experiences.",
	keywords: [
		"Akash Aman",
		"SDE",
		"Full Stack Developer",
		"Responsive design",
		"portfolio",
		"projects",
		"coding",
		"Web development",
		"Web design",
		"User Experience",
		"Html",
		"Css",
		"Javascript",
	],
	applicationName: "Dev.",
	authors: [
		{
			name: "Akash Aman",
			url: baseURL,
		},
	],
	creator: "Akash Aman",
	publisher: "Akash Aman",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: "Akash Aman | Full Stack Dev",
		description:
			"Welcome to the captivating realm of Akash Aman. Witness the fusion of art and technology through full stack dev & transformative web experiences.",
		url: baseURL,
		images: [
			{
				url: "/Portfolio.png",
				width: 1920,
				height: 952,
				alt: "Akash Aman | Full Stack Dev",
			},
		],
		type: "website",
		siteName: "Akash Aman | Full Stack Dev",
		countryName: "India",
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},

	twitter: {
		creatorId: "@sirakashaman",
		creator: "Akash Aman",
		site: baseURL,
		images: [
			{
				url: "/Portfolio.png",
				width: 1920,
				height: 952,
				alt: "Akash Aman | Full Stack Dev",
			},
		],
		title: "Akash Aman | Full Stack Dev",
		description:
			"Welcome to the captivating realm of Akash Aman. Witness the fusion of art and technology through full stack dev & transformative web experiences.",
	},
	manifest: "/manifest.json",
	category: "technology",
	appLinks: {
		web: {
			url: baseURL,
			should_fallback: true,
		},
	},
	archives: [
		baseURL,
		baseURL + "/blogs",
		baseURL + "/courses",
		baseURL + "/projects",
	],
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
	userScalable: true,
	colorScheme: "light dark",
	themeColor: "#000000",
};

/**
 * This is the Root layout for the every page.
 *
 * @param param0 children - children of the component
 * @returns jsx element.
 */
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="stylesheet"
					href="https://use.typekit.net/kja6uqf.css"
				></link>
			</head>
			<body className="bg-[var(--dev-bg-colour)] scrollbar">
				<ApplyTheme />
				<Navigation />
				<HeaderProvider>
					<Layout>{children}</Layout>
				</HeaderProvider>
				<RegisterPWA />
				<GoogleAnalytics gaId="G-K5LQXQ8CTG" />
			</body>
		</html>
	);
}
