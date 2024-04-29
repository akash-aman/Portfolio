import { ParsedUrlQuery } from "querystring";
import MDBlog from "/components/blog";
import {
	BlogRoutesQuery,
	BlogRoutesQueryVariables,
	BlogRoutesDocument,
	BlogPageQuery,
	BlogPageDocument,
	BlogPageQueryVariables,
} from "/generated/graphql";
import { gqlAPI } from "/lib/constant";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { baseURL } from "/lib/constant";
import { wretch } from "/lib/fetchapi";

type MetaProps = {
	params: { blog: string };
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
	const { blog } = await wretch<BlogPageQuery, BlogPageQueryVariables>(
		gqlAPI,
		BlogPageDocument,
		{ slug: params.blog },
		{ tags: [params.blog, "blogs"] },
	);

	return {
		title: blog?.title,
		description: blog?.excerpt,
		openGraph: {
			title: blog?.title,
			description: blog?.excerpt,
			images: [
				{
					url: blog?.featuredImage?.node?.mediaItemUrl,
					width: blog?.featuredImage?.node?.mediaDetails?.width,
					height: blog?.featuredImage?.node?.mediaDetails?.height,
					alt: blog?.featuredImage?.node?.caption,
				},
			],
			type: "website",
			url: baseURL + "/blogs/" + blog?.slug,
			countryName: "India",
		},
		twitter: {
			title: blog?.title,
			description: blog?.excerpt,
			images: [
				{
					url: blog?.featuredImage?.node?.mediaItemUrl,
					width: blog?.featuredImage?.node?.mediaDetails?.width,
					height: blog?.featuredImage?.node?.mediaDetails?.height,
					alt: blog?.featuredImage?.node?.caption,
				},
			],
			site: baseURL + "/blogs/" + blog?.slug,
		},
	};
}

interface Params extends ParsedUrlQuery {
	blog: string;
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
const Blog = async ({ params }: Props) => {
	const { blog } = await wretch<BlogPageQuery, BlogPageQueryVariables>(
		gqlAPI,
		BlogPageDocument,
		{ slug: params.blog },
		{ tags: [params.blog, "blogs"] },
	);

	if (!blog) {
		notFound();
	}

	return (
		<div className="grid h-fit">
			<MDBlog markdown={blog.contentFiltered} />
		</div>
	);
};

export default Blog;

export async function generateStaticParams() {
	const { routes } = await wretch<BlogRoutesQuery, BlogRoutesQueryVariables>(
		gqlAPI,
		BlogRoutesDocument,
		{ first: 100 },
		{ tags: ["blog-routes"] },
	);

	return routes.nodes.map(({ slug }) => {
		return {
			blog: slug,
		};
	});
}

export const dynamic = "force-static";
