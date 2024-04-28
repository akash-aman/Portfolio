import React from "react";
import { techstack } from "/lib/constant";
import Link from "next/link";
import HeaderAnimate from "/components/headerAnimationContext";
import { Metadata } from "next";

/**
 * This is the metadata for the page.
 */
export const metadata: Metadata = {
	title: "Techstack",
	description:
		"Explore the diverse tech stack and skills of Akash Aman in the field of Software Development. Akash possesses expertise in a wide range of technologies, languages, frameworks, tools, and more.",
	keywords: [
		"Techstack",
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
		title: "Techstack | Akash | Full Stack Dev",
		description:
			"Explore the diverse tech stack and skills of Akash Aman in the field of Software Development. Akash possesses expertise in a wide range of technologies, languages, frameworks, tools, and more.",
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
		title: "Techstack | Akash | Full Stack Dev",
		description:
			"Explore the diverse tech stack and skills of Akash Aman in the field of Software Development. Akash possesses expertise in a wide range of technologies, languages, frameworks, tools, and more.",
	},
};

/**
 * This function generates the page.
 *
 * @returns
 */
const Page = () => {
	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(230px,400px))] lg:grid-cols-[repeat(auto-fit,minmax(230px,350px))] justify-center gap-5 lg:gap-8">
			<HeaderAnimate data={{ title: "Techstack 🫣" }} />
			{techstack.map((tech, index) => (
				<Link key={index} href={tech.url} target="_blank">
					<div className=" bg-[var(--light-theme-500)]  dark:bg-[rgba(255,255,255,0.04)]   hover:shadow-md rounded-lg p-4 flex gap-5">
						<div className="p-3 w-16 h-16 grid items-center bg-slate-300  bg-opacity-20 rounded-md">
							<tech.Logo className="w-full" />
						</div>
						<div>
							<p className="font-bold text-[var(--dev-text-color3)] dark:text-neutral-300  m-0 p-0">
								{tech.name}
							</p>
							<p className="text-base text-[var(--dev-text-color5)]  p-0 m-0">
								{tech.description}
							</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Page;
