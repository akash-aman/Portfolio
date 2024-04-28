import React from "react";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import {
	CoursePageQuery,
	CoursePageDocument,
	CoursePageQueryVariables,
} from "/generated/graphql";
import { gqlAPI } from "/lib/constant";
import { request } from "graphql-request";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { baseURL, serverURL } from "/lib/constant";

type MetaProps = {
	params: { course: string };
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
	const { course } = await request<CoursePageQuery, CoursePageQueryVariables>(
		gqlAPI,
		CoursePageDocument,
		{ slug: params.course },
	);

	return {
		title: course?.title,
		description: course?.excerpt,
		openGraph: {
			title: course?.title,
			description: course?.excerpt,
			images: [
				{
					url: course?.featuredImage?.node?.mediaItemUrl,
					width: course?.featuredImage?.node?.mediaDetails?.width,
					height: course?.featuredImage?.node?.mediaDetails?.height,
					alt: course?.featuredImage?.node?.caption,
				},
			],
			type: "website",
			url: baseURL + "/courses/" + course?.slug,
			countryName: "India",
		},
		twitter: {
			title: course?.title,
			description: course?.excerpt,
			images: [
				{
					url: course?.featuredImage?.node?.mediaItemUrl,
					width: course?.featuredImage?.node?.mediaDetails?.width,
					height: course?.featuredImage?.node?.mediaDetails?.height,
					alt: course?.featuredImage?.node?.caption,
				},
			],
			site: baseURL + "/courses/" + course?.slug,
		},
	};
}

interface Params extends ParsedUrlQuery {
	course: string;
}

type Props = {
	params: Params;
};

/**
 * This function generates the page.
 *
 * @param param0 params - params of the page
 * @returns jsx element.
 */
const Course = async ({ params }) => {
	const { course } = await request<CoursePageQuery, CoursePageQueryVariables>(
		gqlAPI,
		CoursePageDocument,
		{ slug: params.course },
	);

	if (!course) {
		notFound();
	}

	return (
		<div>
			<h1 className="mb-10">{course?.title}</h1>
			<div className="grid w-full grid-cols-[repeat(auto-fill,minmax(230px,350px))] justify-center gap-8">
				{course.chapters.chapters.map(({ slug, title }) => (
					<Link key={slug} href={`${course.slug}/${slug}`}>
						<div className="bg-[var(--light-theme-500)] dark:bg-[var(--dark-theme-100)]  rounded-lg p-10">
							<p>{title}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Course;

export const dynamic = "force-static";
