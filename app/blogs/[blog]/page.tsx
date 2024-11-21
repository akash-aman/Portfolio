import { ParsedUrlQuery } from "querystring";
import MDBlog from "/components/blog";
import Link from "next/link";
import Image from "next/image";
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
import ImageComponent from "/components/image";
import Home from "/assets/icons/home2.svg";
import arrow from "/assets/icons/right-arrow.svg";

import facebook from "/assets/icons/facebook.svg";
import twitter from "/assets/icons/twitter.svg";
import reddit from "/assets/icons/redit.svg";
import linkedin from "/assets/icons/linkedin.svg";
import email from "/assets/icons/mail.svg";

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

	const formattedDate = new Date(blog.date).toLocaleDateString(undefined, {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<div className="sm:grid-cols-[1fr_3rem] grid-cols-1 grid gap-8">
			<div className="col-start-2 row-span-2 hidden sm:block">
				<div className="w-10 grid gap-8 sticky top-[40%]">
					<a
						href={`https://twitter.com/intent/tweet?url=https://akash.cx/blogs/${params.blog}&text=${blog.title}`}
						target="_blank"
						rel="noopener noreferrer"
						title="Share on Twitter"
						className="social-icon"
					>
						<Image src={twitter} alt="Twitter" />
					</a>
					<a
						href={`https://www.reddit.com/submit?url=https://akash.cx/blogs/${params.blog}&title=${blog.title}`}
						target="_blank"
						rel="noopener noreferrer"
						title="Share on Reddit"
						className="social-icon"
					>
						<Image src={reddit} alt="Reddit" />
					</a>
					<a
						href={`https://www.facebook.com/sharer/sharer.php?u=https://akash.cx/blogs/${params.blog}`}
						target="_blank"
						rel="noopener noreferrer"
						title="Share on Facebook"
						className="social-icon"
					>
						<Image src={facebook} alt="Facebook" />
					</a>
					<a
						href={`https://www.linkedin.com/shareArticle?mini=true&url=https://akash.cx/blogs/${params.blog}&title=${blog.title}`}
						target="_blank"
						rel="noopener noreferrer"
						title="Share on LinkedIn"
						className="social-icon"
					>
						<Image src={linkedin} alt="LinkedIn" />
					</a>
					<a
						href={`mailto:?subject=${blog.title}&body=https://akash.cx/blogs/${params.blog}`}
						target="_blank"
						title="Share by Email"
						rel="noopener noreferrer"
						className="social-icon"
					>
						<Image src={email} alt="Email" />
					</a>
				</div>
			</div>
			<div className="grid h-fit relative row-start-1">
				<header className="w-full mb-10">
					<div className=" grid grid-flow-col gap-2 justify-start items-center text-sm tk-attribute-mono mb-8">
						<Link href="/" className="tk-attribute-mono mb-1">
							<Image src={Home} className="w-5 inline-block" alt="home" />
						</Link>
						<Image src={arrow} className="w-5 inline-block" alt="arrow" />
						<Link href="/blogs" className="tk-attribute-mono">
							Blogs
						</Link>
						<Image src={arrow} className="w-5 inline-block" alt="arrow" />
						<Link
							href={`/blogs/${params.blog}`}
							className="tk-attribute-mono text-black dark:text-white "
						>
							{blog.title}
						</Link>
					</div>
					<p className="text-center">{formattedDate}</p>
					<h1 className="text-5xl md:text-6xl text-center">{blog?.title}</h1>
					<div className="p-0 leading-3 text-center m-auto max-w-[60%] mt-4">
						{blog.tags.nodes.map(({ name, slug, featuredImage }) => (
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
					{blog?.author?.node?.user?.profilePic?.mediaItemUrl && (
						<div className="flex justify-around my-10">
							<div className="flex gap-2">
								<span>
									<ImageComponent
										className="w-9 h-[inherit] object-cover rounded-full"
										src={blog?.author?.node?.user?.profilePic?.mediaItemUrl}
										alt={
											"Profile Pic of " +
											blog?.author?.node?.firstName +
											" " +
											blog?.author?.node?.lastName
										}
										sizes={blog?.author?.node?.user?.profilePic?.sizes}
										width={1920}
										height={952}
										card={true}
									/>
								</span>
								<span className="align-middle grid items-center text-lg font-thin italic">
									{blog?.author?.node?.firstName} {blog?.author?.node?.lastName}
								</span>
							</div>
							<div>
								{/* modified date  */}
								<p className="text-center m-0 text-lg font-thin italic">
									Updated:{" "}
									{new Date(blog.modified).toLocaleDateString(undefined, {
										year: "numeric",
										month: "long",
									})}
								</p>
							</div>
						</div>
					)}

					{blog?.featuredImage?.node?.mediaItemUrl && (
						<ImageComponent
							className="w-full h-[inherit] object-cover"
							src={blog?.featuredImage?.node?.mediaItemUrl}
							alt={blog?.featuredImage?.node?.caption}
							sizes={blog?.featuredImage?.node?.sizes}
							width={1920}
							height={952}
							card={true}
						/>
					)}
					<div className="sm:hidden grid grid-flow-col align-middle justify-center my-10 gap-4">
						<a
							href={`https://twitter.com/intent/tweet?url=https://akash.cx/blogs/${params.blog}&text=${blog.title}`}
							target="_blank"
							rel="noopener noreferrer"
							title="Share on Twitter"
							className="social-icon"
						>
							<Image className="w-8" src={twitter} alt="Twitter" />
						</a>
						<a
							href={`https://www.reddit.com/submit?url=https://akash.cx/blogs/${params.blog}&title=${blog.title}`}
							target="_blank"
							rel="noopener noreferrer"
							title="Share on Reddit"
							className="social-icon"
						>
							<Image className="w-8" src={reddit} alt="Reddit" />
						</a>
						<a
							href={`https://www.facebook.com/sharer/sharer.php?u=https://akash.cx/blogs/${params.blog}`}
							target="_blank"
							rel="noopener noreferrer"
							title="Share on Facebook"
							className="social-icon"
						>
							<Image className="w-8" src={facebook} alt="Facebook" />
						</a>
						<a
							href={`https://www.linkedin.com/shareArticle?mini=true&url=https://akash.cx/blogs/${params.blog}&title=${blog.title}`}
							target="_blank"
							rel="noopener noreferrer"
							title="Share on LinkedIn"
							className="social-icon"
						>
							<Image className="w-8" src={linkedin} alt="LinkedIn" />
						</a>
						<a
							href={`mailto:?subject=${blog.title}&body=https://akash.cx/blogs/${params.blog}`}
							target="_blank"
							title="Share by Email"
							rel="noopener noreferrer"
							className="social-icon"
						>
							<Image className="w-8" src={email} alt="Email" />
						</a>
					</div>
					<div className="mx-auto w-48 h-1 mt-12 bg-gradient-to-r from-cyan-200 to-cyan-100 dark:from-cyan-400 dark:to-cyan-600 rounded-full"></div>
				</header>
				<MDBlog markdown={blog?.contentFiltered} />
			</div>
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

	return routes?.nodes?.map(({ slug }) => {
		return {
			blog: slug,
		};
	});
}

export const dynamic = "force-static";
