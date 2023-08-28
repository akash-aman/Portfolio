import { MetadataRoute } from "next";
import { gqlAPI, paths, baseURL } from "/lib/constant";
import request from "graphql-request";
import {
	CourseRoutesQuery,
	CourseRoutesQueryVariables,
	CourseRoutesDocument,
	BlogRoutesQuery,
	BlogRoutesDocument,
	BlogRoutesQueryVariables,
} from "/generated/graphql";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const defaultPaths = paths.map((path) => ({
		url: baseURL + "/" + path.path,
		lastModified: new Date().toISOString(),
	}));

	const courses = (
		await request<CourseRoutesQuery, CourseRoutesQueryVariables>(
			gqlAPI,
			CourseRoutesDocument,
			{ page: 1, pageSize: 1000 },
		)
	).courses.data?.reduce((acc, course) => {
		return [
			...acc,
			...course.attributes.chapters?.map(({ chapter }) => {
				return {
					url: baseURL + 
						"/courses/" +
						course.attributes.Slug +
						"/" +
						chapter.data.attributes.Slug,
					lastModified: chapter.data.attributes.updatedAt,
				};
			}),
			{
				url: baseURL + "/courses/" + course.attributes.Slug,
				lastModified: course.attributes.updatedAt,
			},
		];
	}, []);

	const blogs = (
		await request<BlogRoutesQuery, BlogRoutesQueryVariables>(
			gqlAPI,
			BlogRoutesDocument,
			{ page: 1, pageSize: 1000 },
		)
	).posts.data?.map((blog) => {
		return {
			url: baseURL + "/blogs/" + blog.attributes.Slug,
			lastModified: blog.attributes.updatedAt,
		};
	});

	return [...defaultPaths, ...courses, ...blogs];
}
