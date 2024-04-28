const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });
// replace with your own database ID
const databaseId = "46879f32035f4ebfb8bee847658c3ed3";

/**
 * Get a page.
 *
 * @param id page ID
 * @returns
 */
export const page = async (id: string) => {
	const response = await notion.pages.retrieve({
		page_id: id,
	});
	return response;
};

/**
 * Get all entries from a database.
 *
 * @param id database ID
 */
export const entries = async (id: string) => {
	const response = await notion.databases.query({
		database_id: databaseId,
	});
	return response;
};

/**
 * Get all blocks from a block.
 *
 * @param id block ID
 * @returns
 */
export const getBlocks = async (id: string) => {
	const response = await notion.blocks.children.list({
		block_id: id,
	});
	return response;
};

const getAll = async () => {
	const dbentries = await entries(databaseId);

	const data = dbentries.results.map(async (entry) => {
		const blocks = await getBlocks(entry.id);
	});
};

export const filteredDBRows = async () => {
	const response = await notion.databases.query({
		database_id: databaseId,
		filter: {
			property: "Task completed",
			checkbox: {
				equals: true,
			},
		},
	});
	return response;
};

export const getDBRows = async () => {
	const response = await notion.databases.query({
		database_id: databaseId,
	});
	return response;
};
export const getDBBlocks = async () => {
	const response = await notion.blocks.children.list({
		block_id: databaseId,
	});
	return response;
};
