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
import { request } from "graphql-request";
import { gqlAPI } from "/lib/constant";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { baseURL } from "/lib/constant";

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
	const { post } = await request<BlogPageQuery, BlogPageQueryVariables>(
		gqlAPI,
		BlogPageDocument,
		{ slug: params.blog },
	);

	return {
		title: post?.title,
		description: post?.excerpt,
		openGraph: {
			title: post?.title,
			description: post?.excerpt,
			images: [
				{
					url: post?.featuredImage?.node?.mediaItemUrl,
					width: post?.featuredImage?.node?.mediaDetails?.width,
					height: post?.featuredImage?.node?.mediaDetails?.height,
					alt: post?.featuredImage?.node?.caption,
				},
			],
			type: "website",
			url: baseURL + "/blogs/" + post?.slug,
			countryName: "India",
		},
		twitter: {
			title: post?.title,
			description: post?.excerpt,
			images: [
				{
					url: post?.featuredImage?.node?.mediaItemUrl,
					width: post?.featuredImage?.node?.mediaDetails?.width,
					height: post?.featuredImage?.node?.mediaDetails?.height,
					alt: post?.featuredImage?.node?.caption,
				},
			],
			site: baseURL + "/blogs/" + post?.slug,
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
	const { post } = await request<BlogPageQuery, BlogPageQueryVariables>(
		gqlAPI,
		BlogPageDocument,
		{ slug: params.blog },
	);

	if (!post) {
		notFound();
	}

	return (
		<div className="grid h-fit">
			<MDBlog markdown={post.contentFiltered} />
		</div>
	);
};

export default Blog;

export async function generateStaticParams() {
	const { routes } = await request<BlogRoutesQuery, BlogRoutesQueryVariables>(
		gqlAPI,
		BlogRoutesDocument,
		{ first: 100 },
	);

	return routes.nodes.map(({ slug }) => {
		return {
			blog: slug,
		};
	});
}

export const dynamic = "force-static";
