import React from "react";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import {
	CoursePageQuery,
	CoursePageDocument,
} from "/generated/graphql";
import { gqlAPI } from "/lib/constant";
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
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	const options = {
		method: "POST",
		headers: myHeaders,
		next: { tags: [params.course] },
		body: JSON.stringify({
			query: CoursePageDocument.loc.source.body,
			variables: { slug: params.course },
		}),
	};
	const course: CoursePageQuery = (await (await fetch(gqlAPI, options)).json())
		.data;

	return {
		title:
			course?.course?.data?.attributes?.seo?.metaTitle ||
			course?.course?.data?.attributes?.Title,
		description:
			course?.course?.data?.attributes?.seo?.metaDescription ||
			course?.course?.data?.attributes?.Excerpt ||
			course?.course?.data?.attributes?.Description,
		openGraph: {
			title:
				course?.course?.data?.attributes?.seo?.metaSocial?.[0]?.title ||
				course?.course?.data?.attributes?.Title,
			description:
				course?.course?.data?.attributes?.seo?.metaSocial?.[0]?.description ||
				course?.course?.data?.attributes?.Excerpt ||
				course?.course?.data?.attributes?.Description,
			images: [
				{
					url:
						serverURL +
						(course?.course?.data?.attributes?.seo?.metaSocial?.[0]?.image?.data
							?.attributes?.formats?.medium?.url ||
							course?.course?.data?.attributes?.FeaturedImage?.data?.attributes
								?.formats?.medium?.url),
					width:
						course?.course?.data?.attributes?.seo?.metaSocial?.[0]?.image?.data
							?.attributes?.formats?.medium?.width ||
						course?.course?.data?.attributes?.FeaturedImage?.data?.attributes
							?.formats?.medium?.width,
					height:
						course?.course?.data?.attributes?.seo?.metaSocial?.[0]?.image?.data
							?.attributes?.formats?.medium?.height ||
						course?.course?.data?.attributes?.FeaturedImage?.data?.attributes
							?.formats?.medium?.height,
					alt:
						course?.course?.data?.attributes?.seo?.metaSocial?.[0]?.image?.data
							?.attributes?.caption ||
						course?.course?.data?.attributes?.seo?.metaImage?.data?.attributes
							?.formats?.medium?.caption ||
						course?.course?.data?.attributes?.FeaturedImage?.data?.attributes
							?.formats?.medium?.caption,
				},
			],
			type: "website",
			url: baseURL + "/courses/" + course?.course?.data?.attributes?.Slug,
			countryName: "India",
		},
		twitter: {
			title:
				course?.course?.data?.attributes?.seo?.metaSocial?.[1]?.title ||
				course?.course?.data?.attributes?.seo?.metaTitle ||
				course?.course?.data?.attributes?.Title,
			description:
				course?.course?.data?.attributes?.seo?.metaSocial?.[1]?.description ||
				course?.course?.data?.attributes?.seo?.metaDescription ||
				course?.course?.data?.attributes?.Excerpt ||
				course?.course?.data?.attributes?.Description,
			images: [
				{
					url:
						serverURL +
						(course?.course?.data?.attributes?.seo?.metaSocial?.[1]?.image?.data
							?.attributes?.formats?.medium?.url ||
							course?.course?.data?.attributes?.seo?.metaImage?.data?.attributes
								?.formats?.medium?.url ||
							course?.course?.data?.attributes?.FeaturedImage?.data?.attributes
								?.formats?.medium?.url),
					width:
						course?.course?.data?.attributes?.seo?.metaSocial?.[1]?.image?.data
							?.attributes?.formats?.medium?.width ||
						course?.course?.data?.attributes?.seo?.metaImage?.data?.attributes
							?.formats?.medium?.width ||
						course?.course?.data?.attributes?.FeaturedImage?.data?.attributes
							?.formats?.medium?.width,
					height:
						course?.course?.data?.attributes?.seo?.metaSocial?.[1]?.image?.data
							?.attributes?.formats?.medium?.height ||
						course?.course?.data?.attributes?.seo?.metaImage?.data?.attributes
							?.formats?.medium?.height ||
						course?.course?.data?.attributes?.FeaturedImage?.data?.attributes
							?.formats?.medium?.height,
					alt:
						course?.course?.data?.attributes?.seo?.metaSocial?.[1]?.image?.data
							?.attributes?.caption ||
						course?.course?.data?.attributes?.seo?.metaImage?.data?.attributes
							?.formats?.medium?.caption ||
						course?.course?.data?.attributes?.FeaturedImage?.data?.attributes
							?.formats?.medium?.caption,
				},
			],
			site: baseURL + "/courses/" + course?.course?.data?.attributes?.Slug,
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
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	const options = {
		method: "POST",
		headers: myHeaders,
		next: { tags: [params.course] },
		body: JSON.stringify({
			query: CoursePageDocument.loc.source.body,
			variables: { slug: params.course },
		}),
	};
	const course: CoursePageQuery = (await (await fetch(gqlAPI, options)).json())
		.data;

	if (course.course.data == null) {
		notFound();
	}

	return (
		<div>
			<h1 className="mb-10">{course.course.data?.attributes.Title}</h1>
			<div className="grid w-full grid-cols-[repeat(auto-fill,minmax(230px,350px))] justify-center gap-8">
				{course.course.data?.attributes.chapters.map((chapter) => {
					return chapter.chapter.data ? (
						<Link
							key={chapter.id}
							href={`${course.course.data?.attributes.Slug}/${chapter.chapter.data?.attributes.Slug}`}
						>
							<div
								key={chapter.id}
								className="bg-[var(--light-theme-500)] dark:bg-[var(--dark-theme-100)]  rounded-lg p-10"
							>
								<p>{chapter.chapter.data?.attributes.Title}</p>
							</div>
						</Link>
					) : null;
				})}
			</div>
		</div>
	);
};

export default Course;

export const dynamic = "force-static";
