"use client";
import React from "react";
import Footer from "/components/footer";
import Header from "/components/header";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const BasicLayout = ({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element => {
	const pathname = usePathname();
	const pathArray = pathname.split("/");

	const validatePath = () => {
		return pathArray[2] ? true : false;
	};

	return (
		<div className="sm:ml-24">
			<header
				style={
					validatePath()
						? null
						: { backgroundImage: `url(/${pathname.replaceAll("/", "-")}.svg)` }
				}
				className={clsx(
					`grid bg-[var(--light-theme-500)] dark:bg-[var(--dark-theme-100)] min-h-[20rem] w-full z-20 md-h:sticky relative top-0 bg-blend-overlay`,
					{ "min-h-[0rem] h-[0px_!important]": validatePath() },
				)}
			>
				<Header />
			</header>
			<main
				className={clsx(
					"mb-24 sm:mb-0 bg-[var(--light-theme-400)] dark:bg-[var(--dark-theme-200)] fade relative z-40 grid gap-8",
					{
						"p-8 md:p-4 xl:pr-[calc(7rem_+_2.5rem)] xl:p-10 lg:p-20 min-h-[calc(100vh-29rem)] sm:min-h-[calc(100vh-21rem)] lg:grid-cols-[minmax(calc(1024px_-_21rem),1500px)]":
							pathArray[1] === "courses" && pathArray[3],
						/** 1400 */
						"p-8 md:p-8 lg:pr-20 lg:p-20 min-h-[calc(100vh-49rem)] sm:min-h-[calc(100vh-41rem)] lg:grid-cols-[minmax(calc(1024px_-_21rem),1200px)] justify-center":
							pathArray[1] === "courses" && !pathArray[3],
						"p-8 md:p-8 lg:pr-20 lg:py-20 lg:pl-20 min-h-[calc(100vh-49rem)] grid-cols-1 sm:min-h-[calc(100vh-41rem)] lg:grid-cols-[minmax(calc(1024px_-_21rem),1200px)] justify-center":
							pathArray[1] !== "courses" && !pathArray[3],
					},
				)}
			>
				{children}
			</main>

			<footer
				className="
					grid
					content-center
					bg-[var(--light-theme-500)]
					dark:bg-[var(--dark-theme-100)]
					min-h-[20rem]
					w-full
					z-10
					sticky
					bottom-24
					sm:bottom-0
					bg-[rgb(248, 249, 250)]"
			>
				<Footer />
			</footer>
		</div>
	);
};

export default BasicLayout;
