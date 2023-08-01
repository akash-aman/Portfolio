export interface Blog {
	coverImage: string;
	authorImage: string;
	author: string;
	title: string;
	description: string;
	content: string;
	slug: string;
	date: string;
	lastmod: string;
	emogi: string;
	video: string;
	tags: Array<string>;
	category: Array<string>;
}

export interface Course {
	coverImage: string;
	authorImage: string;
	author: string;
	title: string;
	description: string;
	content: string;
	slug: string;
	date: string;
	lastmod: string;
	video: string;
	tags: Array<string>;
	category: Array<string>;
	chapter: Array<Chapter>;
}

export interface Chapter {
	coverImage: string;
	authorImage: string;
	author: string;
	title: string;
	description: string;
	content: string;
	slug: string;
	date: string;
	lastmod: string;
	emogi: string;
	video: string;
	chapter: number;
	section_start: string;
	section_emogi: string | null;
}
