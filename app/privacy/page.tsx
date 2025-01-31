import React from "react";
import Link from "next/link";
import HeaderAnimate from "/components/headerAnimationContext";
import { Metadata } from "next";

/**
 * This is the metadata for the page.
 */
export const metadata: Metadata = {
	title: "Privacy",
	description:
		"Welcome to our Privacy Policy page. At Akash.cx, we value your privacy and are committed to protecting your personal information. Our Privacy Policy explains how we collect, use, and safeguard the data you provide to us.",
	keywords: [
		"Privacy Policy",
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
		title: "Privacy | Akash | Full Stack Dev",
		description:
			"Welcome to our Privacy Policy page. At Akash.cx, we value your privacy and are committed to protecting your personal information. Our Privacy Policy explains how we collect, use, and safeguard the data you provide to us.",
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
		title: "Privacy | Akash | Full Stack Dev",
		description:
			"Welcome to our Privacy Policy page. At Akash.cx, we value your privacy and are committed to protecting your personal information. Our Privacy Policy explains how we collect, use, and safeguard the data you provide to us.",
	},
};

/**
 * This function generates the page.
 *
 * @returns jsx element.
 */
const Page = () => {
	return (
		<div>
			<HeaderAnimate data={{ title: "Privacy Policy 🗒️" }} />
			<p className="MyCodeFont">
				At akash.cx, we value your privacy and are committed to protecting any
				personal information you provide when accessing or using our website.
				This Privacy Policy explains how we collect, use, and safeguard your
				information. By accessing or using our website, you agree to the terms
				of this Privacy Policy.
			</p>
			<h2 className="mt-6 mb-4">Information Collection</h2>

			<p className="MyCodeFont">
				We collect personal information from our website visitors through the
				use of cookies and other tracking technologies, including Google
				Analytics. This information may include your IP address, browser type,
				operating system, and browsing behavior on our website.
			</p>
			<h2 className="mt-6 mb-4">Information Usage</h2>
			<p className="MyCodeFont">
				We use the information collected to analyze website traffic, improve
				our website's performance, and enhance user experience. Google
				Analytics helps us understand how visitors interact with our website,
				which pages are most popular, and how we can improve our content and
				services.
			</p>
			<h2 className="mt-6 mb-4">Content Protection</h2>
			<p className="MyCodeFont">
				All content available on our Site, including but not limited to text,
				images, videos, graphics, and logos, is the property of akash.cx and is
				protected by intellectual property laws. Unauthorized copying,
				reproduction, modification, distribution, or any other unauthorized use
				of the content on our Site is strictly prohibited.
			</p>
			<h2 className="mt-6 mb-4">Third-Party Links</h2>
			<p className="MyCodeFont">
				Our website may contain links to third-party websites for your
				convenience. We are not responsible for the privacy practices or the
				content of those websites. We recommend that you review the privacy
				policies of any third-party websites you visit.
			</p>
			<h2 className="mt-6 mb-4">Changes to the Privacy Policy</h2>
			<p className="MyCodeFont">
				We reserve the right to update or modify this Privacy Policy at any time
				without prior notice. Any changes to this Privacy Policy will be posted
				on this page with a revised "last updated" date. We encourage you to
				review this Privacy Policy periodically to stay informed about how we
				are protecting your information.
			</p>
			<h2 className="mt-6 mb-4">Contact Information</h2>
			<p className="MyCodeFont">
				If you have any questions or concerns about our Privacy Policy or our
				practices regarding your personal information, please contact us at
				<Link href="mailto:mail@akash.cx"> mail@akash.cx</Link>.
			</p>
			<p className="MyCodeFont">
				By using our website, you signify your consent to this Privacy Policy.
				If you do not agree to this Privacy Policy, please do not access or use
				our website.
			</p>
		</div>
	);
};

export default Page;
