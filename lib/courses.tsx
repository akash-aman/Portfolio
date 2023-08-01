import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Course, Chapter } from "../interfaces/blog";

const getDir = (path: string) => join(process.cwd(), path);
const COURSE_DIR = getDir("/contents/courses");

const getCourses = () => {
	const courses = getCoursesSlug();
	const allCourses = courses.map((course) => {
		const slug = course;
		const coursePath = join(COURSE_DIR, course, "_index.md");
		const courseContent = fs.readFileSync(coursePath, "utf8");
		const { data, content } = matter(courseContent);

		getChapters(course);

		return { ...data, content, slug } as Course;
	});

	allCourses.sort((a, b) => {
		return new Date(b.lastmod).getTime() - new Date(a.lastmod).getTime();
	});

	// create object of all courses with slug as key
	return allCourses;
};

const getCoursesObj = () => {
	const allCourses = getCourses();

	const allCoursesObj = allCourses.reduce(
		(acc, curr) => {
			acc[curr.slug] = curr;
			return acc;
		},
		{} as { [key: string]: Course },
	);

	return allCoursesObj;
};

const getChapters = (slug) => {
	const chapters = getChaptersSlug(slug);

	const allChapters = chapters.map((chapter) => {
		const chapterPath = join(COURSE_DIR, slug, chapter);
		const chapterContent = fs.readFileSync(chapterPath, "utf8");
		const { data, content } = matter(chapterContent);
		return { ...data, content, slug: chapter.replace(".md", "") } as Chapter;
	});

	allChapters.sort((a, b) => {
		return a.chapter - b.chapter;
	});

	return allChapters;
};

const getChaptersObj = (slug) => {
	const allChapters = getChapters(slug);

	const allChaptersObj = allChapters.reduce(
		(acc, curr) => {
			acc[curr.slug] = curr;
			return acc;
		},
		{} as { [key: string]: Chapter },
	);

	return allChaptersObj;
};

const getSections = (slug) => {
	const allChapters = getChapters(slug);

	const sections = allChapters.reduce(
		(acc, curr) => {
			// if section_start is not defined, push to previous section.
			if (curr.section_start === undefined) {
				acc[Object.keys(acc)[Object.keys(acc).length - 1]].push(curr);
			} else {
				acc[curr.section_start] = [curr];
			}
			return acc;
		},
		{} as { [key: string]: Chapter[] },
	);

	return sections;
};

const getCoursesSlug = (): string[] => {
	const isDirectory = (source: string) =>
		fs.lstatSync(join(COURSE_DIR, source)).isDirectory();
	const getDirectories = (source: string) =>
		fs.readdirSync(source).filter(isDirectory);
	return getDirectories(COURSE_DIR);
};

const getChaptersSlug = (dir: string): string[] => {
	const getFiles = (source: string) =>
		fs
			.readdirSync(source)
			.filter((file) => file.endsWith(".md") && file !== "_index.md");
	return getFiles(join(COURSE_DIR, dir));
};

const getCourseBySlug = (slug: string) => {
	const coursePath = join(COURSE_DIR, slug, "_index.md");
	const courseContent = fs.readFileSync(coursePath, "utf8");
	const { data, content } = matter(courseContent);
	return { ...data, content, slug } as Course;
};

const getChapterBySlug = (slug: string, chapter: string) => {
	const chapterPath = join(COURSE_DIR, slug, chapter + ".md");
	const chapterContent = fs.readFileSync(chapterPath, "utf8");
	const { data, content } = matter(chapterContent);
	return { ...data, content, slug: chapter.replace(".md", "") } as Chapter;
};

export {
	getCourses,
	getChapters,
	getChaptersSlug,
	getCoursesSlug,
	getCoursesObj,
	getChaptersObj,
	getSections,
	getCourseBySlug,
	getChapterBySlug,
};
