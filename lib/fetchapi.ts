import { Course, Chapter } from "../interfaces/blog";

export const API = "https://raw.githubusercontent.com/akash-aman/Devil-API/cdn";

export async function fetchCourses(page: number = 5) {
	try {
		const course_0 = await fetchInitialCourses();

		let total = course_0.pop().total;
		total = page < total ? page : total;

		const promises = [];

		for (let i = 2; i <= total; i++) {
			promises.push(fetch(`${API}/courses/${i}/index.json`));
		}

		const responses = await Promise.all(promises);
		const courses = await Promise.all(
			responses.map((response) => response.json()),
		);

		courses.map((course) => course.pop());

		return [course_0, ...courses]
			.reduce((acc, val) => acc.concat(val), [])
			.map((course) => course.slug.split("/").pop());
	} catch (error) {
		console.log(error);
	}
}

export async function fetchChapters(Page: number = 5) {
	try {
		const courses = await fetchCourses(Page);

		const promises = [];

		for (let i = 0; i < courses.length; i++) {
			promises.push(fetch(`${API}/courses/${courses[i]}/index.json`));
		}

		const responses = await Promise.all(promises);

		const allCourses = await Promise.all(
			responses.map((response) => response.json()),
		);

		return allCourses.reduce((acc, course) => {
			const chapters = course.chapter.map((chapter) => {
				const path = chapter.slug.split("/");
				const chapterSlug = path.pop();
				const courseSlug = path.pop();
				return {
					course: courseSlug,
					chapter: chapterSlug,
				};
			});
			return acc.concat(chapters);
		}, []);
	} catch (error) {
		console.log(error);
	}
}

export const fetchCoursePage = async (page: number) => {
	try {
		const response = await fetch(`${API}/courses/${page}/index.json`);
		const course = await response.json();
		return course;
	} catch (error) {
		console.log(error);
	}
};

export async function fetchCourse(course: string): Promise<Course> {
	try {
		const response = await fetch(`${API}/courses/${course}/index.json`);
		const courseData = await response.json();
		return courseData;
	} catch (error) {
		console.log(error);
	}
}

export async function fetchChapter(
	course: string,
	chapter: string,
): Promise<Chapter> {
	try {
		const response = await fetch(
			`${API}/courses/${course}/${chapter}/index.json`,
		);
		const chapterData = await response.json();
		return chapterData;
	} catch (error) {
		console.log(error);
	}
}

export async function fetchInitialCourses() {
	try {
		const response = await fetch(`${API}/courses/index.json`);
		const courses = await response.json();
		return courses;
	} catch (error) {
		console.log(error);
	}
}

export async function fetchInitialBlogs() {
	try {
		const response = await fetch(`${API}/blogs/index.json`);
		const blogs = await response.json();
		return blogs;
	} catch (error) {
		console.log(error);
	}
}

export async function fetchBlogs(page: number = 5) {
	try {
		const blog_0 = await fetchInitialBlogs();

		let total = blog_0.pop().total;
		total = page < total ? page : total;

		const promises = [];

		for (let i = 2; i <= total; i++) {
			promises.push(fetch(`${API}/blogs/${i}/index.json`));
		}

		const responses = await Promise.all(promises);
		const blogs = await Promise.all(
			responses.map((response) => response.json()),
		);

		blogs.map((blog) => blog.pop());

		return [blog_0, ...blogs]
			.reduce((acc, val) => acc.concat(val), [])
			.map((course) => course.slug.split("/").pop());
	} catch (error) {
		console.log(error);
	}
}

export async function fetchBlog(blog: string) {
	try {
		const response = await fetch(`${API}/blogs/${blog}/index.json`);
		const blogData = await response.json();
		return blogData;
	} catch (error) {
		console.log(error);
	}
}

export async function fetchBlogPage(page: number) {
	try {
		const response = await fetch(`${API}/blogs/${page}/index.json`);
		const blog = await response.json();
		return blog;
	} catch (error) {
		console.log(error);
	}
}
