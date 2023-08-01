import Sidebar from "./Sidebar";
import {
	CourseSidebarQuery,
	CourseSidebarQueryVariables,
	CourseSidebarDocument,
} from "/generated/graphql";
import { request } from "graphql-request";
import { gqlAPI } from "/lib/constant";
import { notFound } from "next/navigation";
/**
 * This function will get all the sections of the course.
 *
 * @param 	{string} slug Slug of the course.
 * @returns {Array}	 	  All the sections of the course.
 */

/**
 * This layout will contain the sidebar of all the chapters.
 * All the chapters heading.
 *
 * @returns
 */
export default async function Layout({ children, params }) {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	const options = {
		method: "POST",
		headers: myHeaders,
		next: { tags: [params.course] },
		body: JSON.stringify({
			query: CourseSidebarDocument.loc.source.body,
			variables: { slug: params.course },
		}),
	};
	const section: CourseSidebarQuery = (
		await (await fetch(gqlAPI, options)).json()
	).data;

	if (section == null) {
		notFound();
	}

	return (
		<Sidebar section={section} params={params}>
			{children}
		</Sidebar>
	);
}

/**
 * This function will generate all the static params for the course.
 *
 * @returns {Array} - Array of all the courses slug.
 */

/**
 * This is the dynamic route for the course.
 *
 * https://beta.nextjs.org/docs/api-reference/segment-config#dynamic
 */
export const dynamic = "force-static";
