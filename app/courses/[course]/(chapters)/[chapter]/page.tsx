import { ParsedUrlQuery } from "querystring";
import Blog from "/components/blog";
import {
	CourseRoutesQuery,
	CourseRoutesQueryVariables,
	CourseRoutesDocument,
	ChapterPageQuery,
	ChapterPageQueryVariables,
	ChapterPageDocument,
} from "/generated/graphql";
import { request } from "graphql-request";
import { gqlAPI } from "/lib/constant";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { baseURL, serverURL } from "/lib/constant";

type MetaProps = {
	params: { chapter: string; course: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
	{ params, searchParams }: MetaProps,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	const options = {
		method: "POST",
		headers: myHeaders,
		next: { tags: [params.course, params.chapter] },
		body: JSON.stringify({
			query: ChapterPageDocument.loc.source.body,
			variables: { slug: params.chapter },
		}),
	};
	const chapter: ChapterPageQuery = (
		await (await fetch(gqlAPI, options)).json()
	).data;

	return {
		title: chapter?.chapter?.data?.attributes?.seo?.metaTitle || 
			chapter?.chapter?.data?.attributes?.Title,
		description: chapter?.chapter?.data?.attributes?.seo?.metaDescription || 
			chapter?.chapter?.data?.attributes?.Excerpt || 
			chapter?.chapter?.data?.attributes?.Description,
		openGraph: {
			title: chapter?.chapter?.data?.attributes?.seo?.metaSocial?.[0]?.title || 
				chapter?.chapter?.data?.attributes?.seo?.metaTitle || 
				chapter?.chapter?.data?.attributes?.Title,
			description: chapter?.chapter?.data?.attributes?.seo?.metaSocial?.[0]?.description ||
				chapter?.chapter?.data?.attributes?.seo?.metaDescription ||
				chapter?.chapter?.data?.attributes?.Excerpt ||
				chapter?.chapter?.data?.attributes?.Description,
			images: [
				{
					url: serverURL + ( chapter?.chapter?.data?.attributes?.seo?.metaSocial?.[0]?.image?.data?.attributes?.formats?.medium?.url ||
						chapter?.chapter?.data?.attributes?.seo?.metaImage?.data?.attributes?.formats?.medium?.url ||
						chapter?.chapter?.data?.attributes?.FeaturedImage?.data?.attributes?.formats?.medium?.url ),
					width: chapter?.chapter?.data?.attributes?.seo?.metaSocial?.[0]?.image?.data?.attributes?.formats?.medium?.width ||
						chapter?.chapter?.data?.attributes?.seo?.metaImage?.data?.attributes?.formats?.medium?.width ||
						chapter?.chapter?.data?.attributes?.FeaturedImage?.data?.attributes?.formats?.medium?.width,
					height:	chapter?.chapter?.data?.attributes?.seo?.metaSocial?.[0]?.image?.data?.attributes?.formats?.medium?.height ||
						chapter?.chapter?.data?.attributes?.seo?.metaImage?.data?.attributes?.formats?.medium?.height ||
						chapter?.chapter?.data?.attributes?.FeaturedImage?.data?.attributes?.formats?.medium?.height,
					alt: chapter?.chapter?.data?.attributes?.seo?.metaSocial?.[0]?.image?.data?.attributes?.caption ||
						chapter?.chapter?.data?.attributes?.seo?.metaImage?.data?.attributes?.formats?.medium?.caption ||
						chapter?.chapter?.data?.attributes?.FeaturedImage?.data?.attributes?.formats?.medium?.caption,
				},
			],
			type: "website",
			url:  baseURL + "/courses/" +	params.course +	"/" + chapter?.chapter?.data?.attributes?.Slug,
			countryName: "India",
		},
		twitter: {
			title: chapter?.chapter?.data?.attributes?.seo?.metaSocial?.[1]?.title || 
				chapter?.chapter?.data?.attributes?.seo?.metaTitle || 
				chapter?.chapter?.data?.attributes?.Title,
			description: chapter?.chapter?.data?.attributes?.seo?.metaSocial?.[1]?.description ||
				chapter?.chapter?.data?.attributes?.seo?.metaDescription ||
				chapter?.chapter?.data?.attributes?.Excerpt ||
				chapter?.chapter?.data?.attributes?.Description,
			images: [
				{
					url: serverURL + ( chapter?.chapter?.data?.attributes?.seo?.metaSocial?.[1]?.image?.data?.attributes?.formats?.medium?.url ||
						chapter?.chapter?.data?.attributes?.seo?.metaImage?.data?.attributes?.formats?.medium?.url ||
						chapter?.chapter?.data?.attributes?.FeaturedImage?.data?.attributes?.formats?.medium?.url ),
					width: chapter?.chapter?.data?.attributes?.seo?.metaSocial?.[1]?.image?.data?.attributes?.formats?.medium?.width ||
						chapter?.chapter?.data?.attributes?.seo?.metaImage?.data?.attributes?.formats?.medium?.width ||
						chapter?.chapter?.data?.attributes?.FeaturedImage?.data?.attributes?.formats?.medium?.width,
					height:	chapter?.chapter?.data?.attributes?.seo?.metaSocial?.[1]?.image?.data?.attributes?.formats?.medium?.height ||
						chapter?.chapter?.data?.attributes?.seo?.metaImage?.data?.attributes?.formats?.medium?.height ||
						chapter?.chapter?.data?.attributes?.FeaturedImage?.data?.attributes?.formats?.medium?.height,
					alt: chapter?.chapter?.data?.attributes?.seo?.metaSocial?.[1]?.image?.data?.attributes?.caption ||
						chapter?.chapter?.data?.attributes?.seo?.metaImage?.data?.attributes?.caption ||
						chapter?.chapter?.data?.attributes?.FeaturedImage?.data?.attributes?.formats?.medium?.caption,
				},
			],
			site: baseURL +"/courses/" + params.course + "/" +chapter?.chapter?.data?.attributes?.Slug,
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

const Chapter = async ({ params }: Props) => {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	const options = {
		method: "POST",
		headers: myHeaders,
		next: { tags: [params.course, params.chapter] },
		body: JSON.stringify({
			query: ChapterPageDocument.loc.source.body,
			variables: { slug: params.chapter },
		}),
	};
	const chapter: ChapterPageQuery = (
		await (await fetch(gqlAPI, options)).json()
	).data;

	if (chapter.chapter.data == null) {
		notFound();
	}

	return (
		<div className="grid h-fit">
			<Blog markdown={chapter.chapter.data.attributes.Content} />
		</div>
	);
};

export default Chapter;

export async function generateStaticParams() {
	return (
		await request<CourseRoutesQuery, CourseRoutesQueryVariables>(
			gqlAPI,
			CourseRoutesDocument,
			{ page: 1, pageSize: 40 },
		)
	).courses.data.reduce((acc, course) => {
		return [
			...acc,
			...course.attributes.chapters.map(({ chapter }) => {
				return {
					course: course.attributes.Slug,
					chapter: chapter.data.attributes.Slug,
				};
			}),
		];
	}, []);
}

export const dynamic = "force-static";
