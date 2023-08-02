import React from "react";
import Link from "next/link";
import HeaderAnimate from "/components/headerAnimationContext";
import { Metadata } from "next";

/**
 * This is the metadata for the page.
 */
export const metadata: Metadata = {
	title: "Terms",
	description:
		"Welcome to our Terms & Conditions page.Read and understand our Terms & Conditions to learn about the rules, rights, and obligations when using akash.cx.",
	keywords: [
		"Terms & Conditions",
		"Terms of Service",
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
	openGraph: {
		title: "Terms | Akash | Full Stack Dev",
		description:
			"Welcome to our Terms & Conditions page.Read and understand our Terms & Conditions to learn about the rules, rights, and obligations when using akash.cx.",
		url: "https://akash.cx",
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
	twitter: {
		creatorId: "@sirakashaman",
		creator: "Akash Aman",
		site: "https://akash.cx",
		images: [
			{
				url: "/Portfolio.png",
				width: 1920,
				height: 952,
				alt: "Akash Aman | Full Stack Dev",
			},
		],
		title: "Terms | Akash | Full Stack Dev",
		description:
			"Welcome to our Terms & Conditions page. Read and understand our Terms & Conditions to learn about the rules, rights, and obligations when using akash.cx.",
	},
};

/**
 * This function generates the page.
 * 
 * @returns 
 */
const Page = () => {
	return (
		<div className="">
			<HeaderAnimate data={{ title: "Terms & Conditions 🗒️" }} />
			<p className="MyCodeFont">
				By using or accessing this website, you are acknowledging and accepting
				the following Terms and Conditions of Use. These terms encompass all
				relevant laws and regulations, and it is your responsibility to ensure
				compliance with any applicable local laws. If you do not agree with any
				of these terms, you are not permitted to use or access this site. The
				materials found on this website are safeguarded by applicable copyright
				and trademark laws.
			</p>
			<h2 className="mt-6 mb-4">Content Privacy Policy</h2>
			<p className="MyCodeFont">
				The privacy of your personal information is important to us. Our Content
				Privacy Policy outlines how we collect, use, and safeguard your data
				when you interact with this site. Please review our{" "}
				<Link href="/privacy">Privacy Policy</Link> to understand our practices
				and make informed decisions regarding your personal information.
			</p>
			<h2 className="mt-6 mb-4">Disclamer</h2>
			<p className="MyCodeFont">
				The views and opinions expressed on this site are solely those of the
				authors and do not necessarily reflect the official policy or position
				of the site owner or any other individuals or organizations mentioned.
				The content provided is for informational purposes only and should not
				be considered as professional advice. We strive to ensure the accuracy
				and currency of the information presented, but we cannot guarantee its
				completeness or reliability. By using this site, you acknowledge that
				any reliance on the content is at your own risk.
			</p>
			<h2 className="mt-6 mb-4">Content Dispute Resolution</h2>
			<p className="MyCodeFont">
				If you have any concerns or disputes regarding the content published on
				this site, please contact us via email. We are committed to addressing
				and resolving any content-related issues promptly and to the best of our
				abilities.
			</p>
		</div>
	);
};

export default Page;
