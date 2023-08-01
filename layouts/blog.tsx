"use client";
import React from "react";
import Footer from "/components/footer";
import Header from "/components/header";
import Aside from "/components/aside";
interface BlogListsProps {
	nav?: string;
	header?: string;
	content?: string;
	aside?: string;
	footer?: string;
	children?: any;
}

const Blog = ({
	nav,
	header,
	content,
	aside,
	footer,
	children,
}: BlogListsProps): JSX.Element => {
	//nav = 'nav';
	content = "content";
	aside = "aside";
	footer = "footer";
	header = "header";

	//const [show, setShow, props] = useKeyboard(false, 'KeyB');

	return (
		<>
			{/* <nav
				className="
			
				w-[100%] 
				h-[5rem] 
				z-20 
				fixed
				ml-[5rem]

				"> */}
			{/* <Navigation /> */}

			{/* </nav> */}
			<div
				className="ml-[6rem]
				"
			>
				{header && (
					<div
						className="
							bg-[var(--light-theme-500)]
							dark:bg-[var(--dark-theme-100)]
						
							h-[20rem]
							w-[100%] 
							z-[-10]
							sticky
							top-0"
					>
						<Header />
					</div>
				)}
				{
					<div className="fade bg-[var(--light-theme-400)] dark:bg-[var(--dark-theme-200)] shadow-xl min-h-[calc(100vh-40rem)] w-[100%] z-100 grid gap-[2rem] p-[5rem] lg:pl-[10rem] lg:pr-[10rem] justify-center lg:grid-cols-[repeat(auto-fit,80px_minmax(calc(1024px_-_27rem_-_80px),1320px))] ">
						{aside && (
							<aside
								className="
									"
							>
								<section
									className="
										h-max
										sticky 
										top-0 
										pt-10
										
										"
								>
									<Aside />
								</section>
							</aside>
						)}

						{(content || children) && (
							<main
								className="
									row-start-1
									lg:col-start-2
									z-10"
							>
								{children}
							</main>
						)}
					</div>
				}
				{
					<footer
						className="
						bg-[var(--light-theme-500)]
						dark:bg-[var(--dark-theme-100)]
						h-[20rem] 
						w-[100%] 
						z-[-20]
						sticky
						bottom-0 
						bg-[rgb(248, 249, 250)]"
					>
						<Footer />
					</footer>
				}
			</div>
		</>
	);
};

export default Blog;
