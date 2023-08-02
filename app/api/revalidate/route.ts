import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
type Secret = string;

/**
 * This is the webhook handler for On Demand ISR.
 * 
 * @param req NextRequest - Request Object
 * @returns res - response object 
 */
export async function POST(req: NextRequest) {
	const body = await rawBody(req.body);

	if (!body) {
		return NextResponse.json({ message: "No body" }, { status: 404 });
	}

	const bodyJSON = JSON.parse(body);

	const secret: Secret = process.env.GITHUB_WEBHOOK_SECRET;

	const signature: string = req.headers.get("x-hub-signature-256");

	console.log(JSON.stringify(bodyJSON, null, 2));

	if (signature !== secret) {
		return NextResponse.json({ message: "Invalid signature" }, { status: 400 });
	}

	try {
		pathRevalidator(bodyJSON);
		return NextResponse.json({ message: "Revalidated" }, { status: 200 });
	} catch (err) {
		console.error(err);
		NextResponse.json({ message: "Error Revalidating" }, { status: 500 });
	}
}

/**
 * This is the webhook handler for On Demand ISR.
 * 
 * @param req NextRequest - Request Object
 * @returns res - response object
 */
export async function GET(req: NextRequest) {
	return NextResponse.json(`Only Post Request 😈`, { status: 404 });
}

/**
 * This function is used to revalidate the path.
 * 
 * @param body Body - body object
 * @returns 
 */
async function pathRevalidator(body: Body) {
	// check if body is not empty.
	if (!body) {
		return NextResponse.json({ message: "No body" }, { status: 404 });
	}

	//revalidatePath(`/`);

	if (body.model === "course") {
		console.log("-----------------Course-TAG-API--------------------");
		revalidateTag(body.entry.Slug);
		console.log(
			`Current Time : ${new Date().toLocaleTimeString("en-US", {
				timeZone: "Asia/Kolkata",
				year: "numeric",
				month: "short",
				day: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
				hour12: true,
			})} | ` + "revalidate tags: ",
			body.entry.Slug,
		);

		// revalidatePath(`/courses`);
		// console.log('Revalidated path :', `/courses`);

		// revalidatePath(`/courses/${body.entry.Slug}`);
		// console.log( 'Revalidated path :', `/courses/${body.entry.Slug}`);
	}

	if (body.model === "chapter") {
		console.log("-----------------Chapter-TAG-API--------------------");
		revalidateTag(body.entry.Slug);
		console.log(
			`Current Time : ${new Date().toLocaleTimeString("en-US", {
				timeZone: "Asia/Kolkata",
				year: "numeric",
				month: "short",
				day: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
				hour12: true,
			})} | ` + "revalidate tags: ",
			body.entry.Slug,
		);
	}

	if (body.model === "post") {
		console.log("-----------------Post-TAG-API--------------------");
		revalidateTag(body.entry.Slug);
		console.log(
			`Current Time : ${new Date().toLocaleTimeString("en-US", {
				timeZone: "Asia/Kolkata",
				year: "numeric",
				month: "short",
				day: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
				hour12: true,
			})} | ` + "revalidate tags: ",
			body.entry.Slug,
		);

		//  revalidatePath(`/blogs`);
		//  console.log('Revalidated path :', `/blogs`);

		// revalidatePath(`/blogs/${body.entry.Slug}`);
		//  console.log('Revalidated path :', `/blogs/${body.entry.Slug}`);
	}

	if (body.event === "media.create" || body.event === "media.delete") {
		console.log("-----------------Media-TAG-API--------------------");
		revalidateTag(`${body.media.id}`);
		console.log(
			`Current Time : ${new Date().toLocaleTimeString("en-US", {
				timeZone: "Asia/Kolkata",
				year: "numeric",
				month: "short",
				day: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
				hour12: true,
			})} | ` + "revalidate tags: ",
			body?.media?.name,
		);
	}
	console.log("------------------------------------------------------");
	return NextResponse.json({ message: "Revalidated" }, { status: 200 });
}

type Body = {
	event: string;
	createdAt: string;
	model: string;
	media: any;
	uid: string;
	entry: any;
};

/**
 * This function is used to get the raw body of the request.
 * 
 * @param req NextApiRequest - request object
 * @returns Promise<string> - raw body 
 */
async function rawBody(responseBody) {
	const reader = responseBody.getReader();
	const chunks = [];

	while (true) {
		const { done, value } = await reader.read();

		if (done) {
			break;
		}

		chunks.push(value);
	}

	const concatenatedChunks = new Uint8Array(
		chunks.reduce((acc, chunk) => acc + chunk.length, 0),
	);
	let offset = 0;

	for (const chunk of chunks) {
		concatenatedChunks.set(chunk, offset);
		offset += chunk.length;
	}

	return new TextDecoder().decode(concatenatedChunks);
}
