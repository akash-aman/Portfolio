import React from "react";
import HeaderAnimate from "/components/headerAnimationContext";
import {
	BlogsPageQuery,
	BlogsPageQueryVariables,
	BlogsPageDocument,
} from "/generated/graphql";
import { request } from "graphql-request";
import { gqlAPI } from "/lib/constant";
import { Metadata } from "next";
import Card from "/components/card";

/**
 * This is the metadata for the page.
 */
export const metadata: Metadata = {
	title: {
		absolute: "Blogs",
	},
	description:
		"Explore insightful and informative blogs in various topics. akash.cx offers a collection of educational & insightful articles that cover diverse topics related to software & technology. Visit the Blogs  page to access valuable resources.",
	keywords: [
		"Blogs",
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
	openGraph: {
		title: "Blogs",
		description:
			"Explore insightful and informative blogs in various topics. akash.cx offers a collection of educational & insightful articles that cover diverse topics related to software & technology. Visit the Blogs  page to access valuable resources.",
		url: "https://akash.cx",
		images: [
			{
				url: "/Portfolio.png",
				width: 1920,
				height: 952,
				alt: "Blogs",
			},
		],
		type: "website",
		siteName: "Blogs",
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
				alt: "Blogs",
			},
		],
		title: "Blogs",
		description:
			"Explore insightful and informative blogs in various topics. Akash.cx offers a collection of educational & insightful articles that cover diverse topics related to software & technology. Visit the Blogs page to access valuable resources.",
	},
};

/**
 * This function generates the page.
 *
 * @returns
 */
const Page = async () => {
	const { blogs } = await request<BlogsPageQuery, BlogsPageQueryVariables>(
		gqlAPI,
		BlogsPageDocument,
		{ first: 5 },
	);

	return (
		<div className="grid w-full grid-cols-[repeat(auto-fill,minmax(230px,350px))] justify-center gap-8">
			<HeaderAnimate data={{ title: "Blog ✅" }} />
			{blogs.nodes.map(({ slug, ...fields }) => (
				<Card type={"blogs"} key={slug} slug={slug} fields={fields} />
			))}
		</div>
	);
};

export default Page;
