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

const webFont = localFont({
	src: [
		{
			path: "../assets/fonts/wt-400.woff2",
			weight: "400",
		},
	],
	variable: "--font-content",
	preload: true,
});

const headFont = localFont({
	src: [
		{
			path: "../assets/fonts/GreycliffCF-Heavy.woff2",
			weight: "900",
		},
	],
	variable: "--font-heading",
	preload: true,
});

const svgFont = localFont({
	src: [
		{
			path: "../assets/fonts/swing-king.woff2",
			weight: "400",
		},
	],
	variable: "--font-svg",
	preload: false,
});

const codeFont = localFont({
	src: [
		{
			path: "../assets/fonts/attribute-mono-400.woff2",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-code",
	preload: false,
});

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
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: false,
			follow: false,
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
	viewport: {
		width: "device-width",
		initialScale: 1,
		userScalable: true,
	},
	themeColor: "#000000",
	manifest: "/manifest.json",
	category: "technology",
	colorScheme: "light dark",
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
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={
				webFont.variable +
				" " +
				headFont.variable +
				" " +
				svgFont.variable +
				" " +
				codeFont.variable
			}
		>
			<body className="bg-[var(--dev-bg-colour)] scrollbar">
				<ApplyTheme />
				<Navigation />
				<HeaderProvider>
					<Layout>{children}</Layout>
				</HeaderProvider>
				<RegisterPWA />
			</body>
		</html>
	);
}
