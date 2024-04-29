import { MetadataRoute } from "next";
import { gqlAPI, paths, baseURL } from "/lib/constant";
import {
	BlogRoutesQuery,
	BlogRoutesDocument,
	BlogRoutesQueryVariables,
} from "/generated/graphql";
import { wretch } from "/lib/fetchapi";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const defaultPaths = paths.map((path) => ({
		url: baseURL + path.path,
		lastModified: new Date().toISOString(),
	}));

	const { routes } = await wretch<BlogRoutesQuery, BlogRoutesQueryVariables>(
		gqlAPI,
		BlogRoutesDocument,
		{ first: 100 },
	);

	const blogs = routes.nodes.map(({ slug, modified }) => {
		return {
			url: baseURL + "/blogs/" + slug,
			lastModified: modified,
		};
	});

	return [...defaultPaths, ...blogs];
}
