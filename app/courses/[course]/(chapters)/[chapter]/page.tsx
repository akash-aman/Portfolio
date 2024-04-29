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

	return (
		<div className="grid h-fit">
			<Blog markdown={chapter?.contentFiltered} />
		</div>
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
