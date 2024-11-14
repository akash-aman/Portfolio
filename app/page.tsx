import {
	HomePageQuery,
	HomePageQueryVariables,
	HomePageDocument,
} from "/generated/graphql";
import { gqlAPI } from "/lib/constant";
import HeaderAnimate from "/components/headerAnimationContext";
import Card from "/components/card";
import { Metadata } from "next";
import { baseURL } from "/lib/constant";
import { wretch } from "/lib/fetchapi";
import Head from "next/head";

/**
 * This is the metadata for the page.
 */
export const metadata: Metadata = {
	title: {
		absolute: "Akash Aman | Full Stack Dev",
	},
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

/**
 * This function generates the page.
 *
 * @returns
 */
const Page = async () => {
	const { blogs } = await wretch<HomePageQuery, HomePageQueryVariables>(
		gqlAPI,
		HomePageDocument,
		{ first: 5 },
		{ tags: ["home", "home-blog"] },
	);

	return (
		<>
			<div>
				<HeaderAnimate
					data={{
						title: "Hey!👋🏻,I`m Akash,",
						subtitle: "Full Stack Developer ",
						page: "home",
					}}
				/>
				<h3 className="mb-4">About Me 😎</h3>
				<p>
					I am a Software Engineer working at{" "}
					<i className="not-italic animate-gradient font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400  to-pink-600">
						rtCamp, India
					</i>
					❤️. I am an active learner & love exploring new technologies. My
					passion towards technologies motivates me everyday to learn something
					new 😃.
				</p>
				<h3 className="mb-4 mt-12">Activities & Interests 🎻</h3>
				<p>
					During my free time 🕛, you'll often find me building e-hacks and
					coding projects, which I enthusiastically share as open-source
					contributions on GitHub 🧑‍💻. Apart from my professional pursuits, I'm
					deeply fond of gadgets, teaching, and traveling. Exploring new
					destinations 🚞 and staying updated with cutting-edge technologies 🤖
					bring me immense joy 😊 and fulfillment.
				</p>
				<h3 className="mb-14 text mt-12">Latest Blogs 📝</h3>
				<div className="grid w-full grid-cols-[repeat(auto-fill,minmax(230px,370px))] justify-center gap-8">
					{blogs.nodes.map(({ slug, ...fields }) => {
						return (
							<Card type={"blogs"} key={slug} slug={slug} fields={fields} />
						);
					})}
				</div>
				{/* <h3 className="mb-14 text mt-12">Latest Courses 📖</h3>
				<div className="grid w-full grid-cols-[repeat(auto-fill,minmax(230px,370px))] justify-center gap-8">
					{courses.data.map(({ id, attributes }) => {
						return (
							<Card type={"courses"} key={id} attributes={attributes} id={id} />
						);
					})}
				</div> */}
			</div>
		</>
	);
};

export default Page;
