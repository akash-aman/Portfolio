import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Blog } from "../interfaces/blog";

const getDir = (path: string) => join(process.cwd(), path);
const BLOG_DIR = getDir("/contents/lessons");
const COURSE_DIR = getDir("/contents/courses");

const getFileNames = (dir: string): string[] => {
	return fs.readdirSync(dir);
};

const getBlogFileNames = () => {
	return getFileNames(BLOG_DIR);
};

const getItemInPath = (filePath: string) => {
	const fileContent = fs.readFileSync(filePath, "utf8");
	const { data, content } = matter(fileContent);
	return { ...data, content } as Blog;
};

const getBlog = (name: string) => {
	const blog = getItemInPath(join(BLOG_DIR, name));
	blog.slug = name.replace(/\.md$/, "");
	return blog;
};

const getBlogBySlug = async (slug: string) => {
	const fileName = slug + ".md";
	const blog = getBlog(fileName);
	return blog;
};

const getBlogs = (): Blog[] => {
	const names = getBlogFileNames();

	const items = names.map(getBlog);
	return items;
};

export { getBlogFileNames, getBlogs, getBlogBySlug };
