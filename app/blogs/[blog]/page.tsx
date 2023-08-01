import { ParsedUrlQuery } from "querystring";
import { use } from "react";
import MDBlog from "/components/blog";
import {
	BlogRoutesQuery,
	BlogRoutesQueryVariables,
	BlogRoutesDocument,
	BlogPageQuery,
	BlogPageQueryVariables,
	BlogPageDocument,
} from "/generated/graphql";
import { request } from "graphql-request";
import { gqlAPI } from "/lib/constant";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { baseURL, serverURL } from "/lib/constant";
//import 

type MetaProps = {
	params: { blog: string };
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
		next: { tags: [params.blog] },
		body: JSON.stringify({
			query: BlogPageDocument.loc.source.body,
			variables: { slug: params.blog },
		}),
	};
	const blog: BlogPageQuery = (await (await fetch(gqlAPI, options)).json())
		.data;

		return {
			title: blog?.post?.data?.attributes?.seo?.metaTitle || 
				blog?.post?.data?.attributes?.Title,
			description: blog?.post?.data?.attributes?.seo?.metaDescription || 
				blog?.post?.data?.attributes?.Excerpt || 
				blog?.post?.data?.attributes?.Description,
			openGraph: {
				title: blog?.post?.data?.attributes?.seo?.metaSocial?.[0]?.title || 
					blog?.post?.data?.attributes?.seo?.metaTitle || 
					blog?.post?.data?.attributes?.Title,
				description: blog?.post?.data?.attributes?.seo?.metaSocial?.[0]?.description ||
					blog?.post?.data?.attributes?.seo?.metaDescription ||
					blog?.post?.data?.attributes?.Excerpt ||
					blog?.post?.data?.attributes?.Description,
				images: [
					{
						url: serverURL + ( blog?.post?.data?.attributes?.seo?.metaSocial?.[0]?.image?.data?.attributes?.formats?.medium?.url ||
							blog?.post?.data?.attributes?.seo?.metaImage?.data?.attributes?.formats?.medium?.url ||
							blog?.post?.data?.attributes?.FeaturedImage?.data?.attributes?.formats?.medium?.url ),
						width: blog?.post?.data?.attributes?.seo?.metaSocial?.[0]?.image?.data?.attributes?.formats?.medium?.width ||
							blog?.post?.data?.attributes?.seo?.metaImage?.data?.attributes?.formats?.medium?.width ||
							blog?.post?.data?.attributes?.FeaturedImage?.data?.attributes?.formats?.medium?.width,
						height:	blog?.post?.data?.attributes?.seo?.metaSocial?.[0]?.image?.data?.attributes?.formats?.medium?.height ||
							blog?.post?.data?.attributes?.seo?.metaImage?.data?.attributes?.formats?.medium?.height ||
							blog?.post?.data?.attributes?.FeaturedImage?.data?.attributes?.formats?.medium?.height,
						alt: blog?.post?.data?.attributes?.seo?.metaSocial?.[0]?.image?.data?.attributes?.caption ||
							blog?.post?.data?.attributes?.seo?.metaImage?.data?.attributes?.formats?.medium?.caption ||
							blog?.post?.data?.attributes?.FeaturedImage?.data?.attributes?.formats?.medium?.caption,
					},
				],
				type: "website",
				url:  baseURL + "/blogs/" + blog?.post?.data?.attributes?.Slug,
				countryName: "India",
			},
			twitter: {
				title: blog?.post?.data?.attributes?.seo?.metaSocial?.[1]?.title || 
					blog?.post?.data?.attributes?.seo?.metaTitle || 
					blog?.post?.data?.attributes?.Title,
				description: blog?.post?.data?.attributes?.seo?.metaSocial?.[1]?.description ||
					blog?.post?.data?.attributes?.seo?.metaDescription ||
					blog?.post?.data?.attributes?.Excerpt ||
					blog?.post?.data?.attributes?.Description,
				images: [
					{
						url: serverURL + ( blog?.post?.data?.attributes?.seo?.metaSocial?.[1]?.image?.data?.attributes?.formats?.medium?.url ||
							blog?.post?.data?.attributes?.seo?.metaImage?.data?.attributes?.formats?.medium?.url ||
							blog?.post?.data?.attributes?.FeaturedImage?.data?.attributes?.formats?.medium?.url ),
						width: blog?.post?.data?.attributes?.seo?.metaSocial?.[1]?.image?.data?.attributes?.formats?.medium?.width ||
							blog?.post?.data?.attributes?.seo?.metaImage?.data?.attributes?.formats?.medium?.width ||
							blog?.post?.data?.attributes?.FeaturedImage?.data?.attributes?.formats?.medium?.width,
						height:	blog?.post?.data?.attributes?.seo?.metaSocial?.[1]?.image?.data?.attributes?.formats?.medium?.height ||
							blog?.post?.data?.attributes?.seo?.metaImage?.data?.attributes?.formats?.medium?.height ||
							blog?.post?.data?.attributes?.FeaturedImage?.data?.attributes?.formats?.medium?.height,
						alt: blog?.post?.data?.attributes?.seo?.metaSocial?.[1]?.image?.data?.attributes?.caption ||
							blog?.post?.data?.attributes?.seo?.metaImage?.data?.attributes?.caption ||
							blog?.post?.data?.attributes?.FeaturedImage?.data?.attributes?.formats?.medium?.caption,
					},
				],
				site: baseURL +"/blogs/" + blog?.post?.data?.attributes?.Slug,
			},
		};
}

interface Params extends ParsedUrlQuery {
	blog: string;
}

type Props = {
	params: Params;
};

const Blog = async ({ params }: Props) => {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	const options = {
		method: "POST",
		headers: myHeaders,
		next: { tags: [params.blog] },
		body: JSON.stringify({
			query: BlogPageDocument.loc.source.body,
			variables: { slug: params.blog },
		}),
	};
	const blog: BlogPageQuery = (await (await fetch(gqlAPI, options)).json())
		.data;

	if (blog.post.data == null) {
		notFound();
	}

	return (
		<div className="grid h-fit">
			<MDBlog markdown={blog.post.data.attributes.Content} />
		</div>
	);
};

export default Blog;

export async function generateStaticParams() {
	return (
		await request<BlogRoutesQuery, BlogRoutesQueryVariables>(
			gqlAPI,
			BlogRoutesDocument,
			{ page: 1, pageSize: 40 },
		)
	).posts.data.map((blog) => {
		return {
			blog: `${blog.attributes.Slug}`,
		};
	});
}

export const dynamic = "force-static";
