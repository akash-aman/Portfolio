import { ParsedUrlQuery } from "querystring";
import { cache } from "react";
import Blog from "/components/blog";
import {
	CourseRoutesQuery,
	CourseRoutesQueryVariables,
	CourseRoutesDocument,
	ChapterPageQuery,
	ChapterPageDocument,
	ChapterPageQueryVariables,
} from "/generated/graphql";
import { request } from "graphql-request";
import { gqlAPI } from "/lib/constant";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { baseURL, serverURL } from "/lib/constant";
import { wretch } from "/lib/fetchapi";
import Image from "next/image";
import Link from "next/link";
import ImageComponent from "/components/image";
import Home from "/assets/icons/home2.svg";
import arrow from "/assets/icons/right-arrow.svg";

type MetaProps = {
	params: { chapter: string; course: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

/**
 * This function generates the metadata for the page.
 *
 * @param param0 params - params of the page
 * @param param1 searchParams - searchParams of the page
 * @param parent parent - parent metadata
 * @returns
 */
export async function generateMetadata(
	{ params, searchParams }: MetaProps,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const { chapter } = await wretch<ChapterPageQuery, ChapterPageQueryVariables>(
		gqlAPI,
		ChapterPageDocument,
		{ slug: params.chapter },
		{ tags: [params.chapter, params.course, "chapters"] },
	);

	return {
		title: chapter?.title,
		description: chapter?.excerpt,
		openGraph: {
			title: chapter?.title,
			description: chapter?.excerpt,
			images: [
				{
					url: chapter?.featuredImage?.node?.mediaItemUrl,
					width: chapter?.featuredImage?.node?.mediaDetails?.width,
					height: chapter?.featuredImage?.node?.mediaDetails?.height,
					alt: chapter?.featuredImage?.node?.caption,
				},
			],
			type: "website",
			url: baseURL + "/courses/" + params.course + "/" + chapter?.slug,
			countryName: "India",
		},
		twitter: {
			title: chapter?.title,
			description: chapter?.excerpt,
			images: [
				{
					url: chapter?.featuredImage?.node?.mediaItemUrl,
					width: chapter?.featuredImage?.node?.mediaDetails?.width,
					height: chapter?.featuredImage?.node?.mediaDetails?.height,
					alt: chapter?.featuredImage?.node?.caption,
				},
			],
			site: baseURL + "/courses/" + params.course + "/" + chapter?.slug,
		},
	};
}

interface Params extends ParsedUrlQuery {
	course: string;
	chapter: string;
}

type Props = {
	params: Params;
};

/**
 * This function generates the page.
 *
 * @param param0 params - params of the page
 * @returns
 */
const Chapter = async ({ params }: Props) => {
	const { chapter } = await wretch<ChapterPageQuery, ChapterPageQueryVariables>(
		gqlAPI,
		ChapterPageDocument,
		{ slug: params.chapter },
		{ tags: [params.chapter, params.course, "chapters"] },
	);

	if (!chapter) {
		notFound();
	}

	const formattedDate = new Date(chapter.date).toLocaleDateString(undefined, {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<>
			<header className="w-full mb-10">
				<div className=" grid grid-flow-col gap-2 justify-start items-center text-sm tk-attribute-mono mb-8">
					<Link href="/" className="tk-attribute-mono mb-1">
						<Image src={Home} className="w-5 inline-block" alt="home" />
					</Link>
					<Image src={arrow} className="w-5 inline-block" alt="arrow" />
					<Link href="/courses" className="tk-attribute-mono">
						Courses
					</Link>
					<Image src={arrow} className="w-5 inline-block" alt="arrow" />
					<Link
						href={`/courses/${params.course}`}
						className="tk-attribute-mono capitalize"
					>
						{params.course.split("-").join(" ")}
					</Link>
					<Image src={arrow} className="w-5 inline-block" alt="arrow" />
					<Link
						href={`/courses/${params.course}/${params.chapter}`}
						className="tk-attribute-mono text-black dark:text-white "
					>
						{chapter.title}
					</Link>
				</div>
				<p className="text-center">{formattedDate}</p>
				<h1 className="text-5xl md:text-6xl text-center">{chapter?.title}</h1>
				<div className="p-0 leading-3 text-center m-auto max-w-[60%] mt-4">
					{chapter.tags.nodes.map(({ name, slug, featuredImage }) => (
						<div key={slug} className="inline-block">
							<i className="leading-2 grid items-center bg-[var(--light-theme-500)] dark:bg-[rgba(255,255,255,0.05)]  dark:bg-opacity-5 grid-flow-col gap-1 rounded-md not-italic m-[4px] py-[2px] p-1">
								<ImageComponent
									className="w-full h-[inherit] object-cover"
									src={featuredImage?.featuredImage?.mediaItemUrl}
									alt={featuredImage?.featuredImage?.caption}
									sizes={featuredImage?.featuredImage?.sizes}
									width={32}
									height={32}
									card={true}
								/>
								<span className="font-light text-sm text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.4)]">
									{name}
								</span>
							</i>
						</div>
					))}
				</div>
				{chapter?.author?.node?.user?.profilePic?.mediaItemUrl && (
					<div className="flex justify-around my-10">
						<div className="flex gap-2">
							<span>
								<ImageComponent
									className="w-9 h-[inherit] object-cover rounded-full"
									src={chapter?.author?.node?.user?.profilePic?.mediaItemUrl}
									alt={
										"Profile Pic of " +
										chapter?.author?.node?.firstName +
										" " +
										chapter?.author?.node?.lastName
									}
									sizes={chapter?.author?.node?.user?.profilePic?.sizes}
									width={1920}
									height={952}
									card={true}
								/>
							</span>
							<span className="align-middle grid items-center text-lg font-thin italic">
								{chapter?.author?.node?.firstName}{" "}
								{chapter?.author?.node?.lastName}
							</span>
						</div>
						<div>
							{/* modified date  */}
							<p className="text-center m-0 text-lg font-thin italic">
								Updated:{" "}
								{new Date(chapter.modified).toLocaleDateString(undefined, {
									year: "numeric",
									month: "long",
								})}
							</p>
						</div>
					</div>
				)}

				{chapter?.featuredImage?.node?.mediaItemUrl && (
					<ImageComponent
						className="w-full h-[inherit] object-cover"
						src={chapter?.featuredImage?.node?.mediaItemUrl}
						alt={chapter?.featuredImage?.node?.caption}
						sizes={chapter?.featuredImage?.node?.sizes}
						width={1920}
						height={952}
						card={true}
					/>
				)}
				<div className="mx-auto w-48 h-1 mt-12 bg-gradient-to-r from-cyan-200 to-cyan-100 dark:from-cyan-400 dark:to-cyan-600 rounded-full"></div>
			</header>
			<div className="grid h-fit 2xl:col-span-1 2xl:col-start-2">
				<Blog markdown={chapter?.contentFiltered} />
			</div>
		</>
	);
};

export default Chapter;

/**
 * This function generates the static paths for the page.
 *
 * @returns array of paths.
 */
export async function generateStaticParams() {
	const { courses } = await wretch<
		CourseRoutesQuery,
		CourseRoutesQueryVariables
	>(gqlAPI, CourseRoutesDocument, { first: 1000 }, { tags: ["course-routes"] });

	return courses.nodes.reduce((acc, course) => {
		return [
			...acc,
			...course?.chapters?.chapters?.map(({ slug }) => {
				return {
					course: course.slug,
					chapter: slug,
				};
			}),
		];
	}, []);
}

export const dynamic = "force-static";
