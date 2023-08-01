//import { createHmac } from 'crypto';
import { NextApiRequest, NextApiResponse } from "next";
import {
	RevalidateCourseQuery,
	RevalidateCourseQueryVariables,
	RevalidateCourseDocument,
} from "/generated/graphql";
import { request } from "graphql-request";
import { gqlAPI } from "/lib/constant";

export default async function handleWebhook(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	// verify the webhook signature request against the
	// unmodified, unparsed body
	const body = await getRawBody(req);
	if (!body) {
		res.status(400).send("Bad request (no body)");
		return;
	}

	const jsonBody: Body = JSON.parse(body);

	// compute our signature from the raw body
	const secret = process.env.GITHUB_WEBHOOK_SECRET;
	const signature = req.headers["x-hub-signature-256"];
	//const computedSignature =
	// 'sha256=' + createHmac('sha256', secret).update(body).digest('hex');

	if (signature !== secret) {
		return res.status(403).send("Forbidden");
	}

	try {
		console.log("-----------------Body-Path-API--------------------");
		console.log("body: ", JSON.stringify(jsonBody, null, 2));
		await res.revalidate(`/`);

		if (jsonBody.model === "course") {
			console.log("-----------------Course-Path-API--------------------");
			await res.revalidate(`/courses`);
			console.log(
				`Current Time : ${new Date().toLocaleTimeString("en-US", {
					timeZone: "Asia/Kolkata",
					year: "numeric",
					month: "short",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					hour12: true,
				})} | ` + "Revalidated path :",
				`/courses`,
			);

			await res.revalidate(`/courses/${jsonBody.entry.Slug}`);
			console.log(
				`Current Time : ${new Date().toLocaleTimeString("en-US", {
					timeZone: "Asia/Kolkata",
					year: "numeric",
					month: "short",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					hour12: true,
				})} | ` + "Revalidated path :",
				`/courses/${jsonBody.entry.Slug}`,
			);

			const allChapters = await request<
				RevalidateCourseQuery,
				RevalidateCourseQueryVariables
			>(gqlAPI, RevalidateCourseDocument, { slug: jsonBody.entry.Slug });

			if (allChapters.course.data !== null) {
				for (const chapter of allChapters.course.data?.attributes.chapters) {
					await res.revalidate(
						`/courses/${jsonBody.entry.Slug}/${chapter.chapter.data.attributes.Slug}`,
					);
					console.log(
						`Current Time : ${new Date().toLocaleTimeString("en-US", {
							timeZone: "Asia/Kolkata",
							year: "numeric",
							month: "short",
							day: "2-digit",
							hour: "2-digit",
							minute: "2-digit",
							hour12: true,
						})} | ` + "Revalidated path :",
						`/courses/${jsonBody.entry.Slug}/${chapter.chapter.data.attributes.Slug}`,
					);
				}
			}
		}

		if (jsonBody.model === "post") {
			console.log("-----------------Post-Path-API--------------------");
			await res.revalidate(`/blogs`);
			await res.revalidate(`/blogs/${jsonBody.entry.Slug}`);
			console.log(
				`Current Time : ${new Date().toLocaleTimeString("en-US", {
					timeZone: "Asia/Kolkata",
					year: "numeric",
					month: "short",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					hour12: true,
				})} | ` + "Revalidated path : /blogs",
			);
			console.log(
				`Current Time : ${new Date().toLocaleTimeString("en-US", {
					timeZone: "Asia/Kolkata",
					year: "numeric",
					month: "short",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					hour12: true,
				})} | ` + "Revalidated path :",
				`/blogs/${jsonBody.entry.Slug}`,
			);
		}

		console.log("---------------------------------------------------");
		return res.status(200).send(
			`Current Time : ${new Date().toLocaleTimeString("en-US", {
				timeZone: "Asia/Kolkata",
				year: "numeric",
				month: "short",
				day: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
				hour12: true,
			})} | ` + "revalidated",
		);
	} catch (err) {
		console.log("-----------------Error-Path-API--------------------");
		console.error(err);
		return res.status(500).send("Internal server error");
	}
}

type Body = {
	event: string;
	createdAt: string;
	model: string;
	uid: string;
	entry: any;
};

function getRawBody(req): Promise<string> {
	return new Promise((resolve, reject) => {
		let bodyChunks = [];
		req.on("end", () => {
			const rawBody = Buffer.concat(bodyChunks).toString("utf8");
			resolve(rawBody);
		});
		req.on("data", (chunk) => bodyChunks.push(chunk));
	});
}

export const config = {
	api: {
		bodyParser: false,
	},
};
