import { MetadataRoute } from "next";
import { gqlAPI, paths, baseURL } from "/lib/constant";
import {
	BlogRoutesQuery,
	BlogRoutesDocument,
	BlogRoutesQueryVariables,
	CourseRoutesQuery,
	CourseRoutesDocument,
	CourseRoutesQueryVariables,
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

	const { courses } = await wretch<
		CourseRoutesQuery,
		CourseRoutesQueryVariables
	>(gqlAPI, CourseRoutesDocument, { first: 1000 }, { tags: ["course-routes"] });

	if (!(!courses?.nodes || !Array.isArray(courses.nodes))) {
		const coursesChaptersRoutes = courses.nodes.reduce((acc, course) => {
			if (
				!course?.chapters?.chapters ||
				!Array.isArray(course.chapters.chapters)
			) {
				return acc;
			}

			const chapterParams = course.chapters.chapters
				.filter((chapter) => chapter?.slug)
				.map(({ slug, modified }) => (
					{
						url: baseURL + "/courses/" + course.slug + "/" + slug!,
						lastModified: modified,
					}));

			return [...acc, ...chapterParams];
		}, []);


		const coursesRoutes = courses.nodes.reduce((acc, course) => {
			if (
				!course?.chapters?.chapters ||
				!Array.isArray(course.chapters.chapters)
			) {
				return acc;
			}

			return [...acc, {
				url: baseURL + "/courses/" + course.slug,
				lastModified: course.modified,
			}];
		}, []);

		return [...defaultPaths, ...blogs, ...coursesRoutes, ...coursesChaptersRoutes];
	}

	return [...defaultPaths, ...blogs];
}
