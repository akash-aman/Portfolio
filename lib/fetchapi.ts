import { DocumentNode } from "graphql";

export async function wretch<T, V>(
	API: string,
	document: DocumentNode,
	variables: V,
	next?: any,
): Promise<T> {
	const header = new Headers();
	header.append("Content-Type", "application/json");

	const data = await fetch(API, {
		method: "POST",
		headers: header,
		cache: "force-cache",
		next: next,
		body: JSON.stringify({
			query: document.loc.source.body,
			variables: variables,
		}),
	});

	if (!data.ok) {
		const text = await data.text();
		throw new Error(`API Error: ${data.status} ${data.statusText}\nBody: ${text}`);
	}

	const text = await data.text();
	try {
		return JSON.parse(text).data as T;
	} catch (e) {
		console.error("Error parsing JSON:", e);
		console.error("Response text:", text);
		throw e;
	}
}
