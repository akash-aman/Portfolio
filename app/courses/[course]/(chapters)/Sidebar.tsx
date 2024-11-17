"use client";
import clsx from "clsx";
import Link from "next/link";
import useKeyboard from "/hooks/useKeyboard";
import { CourseSidebarQuery } from "/generated/graphql";
import { notFound } from "next/navigation";
import React from "react";

type SidebarProps = {
	children: React.ReactNode;
	course: CourseSidebarQuery;
	params: any;
};

/**
 * This component is the sidebar for the course page.
 *
 * @param param0 children - children of the component
 * @param param1 section - section of the component
 * @param param2 params - params of the component
 * @returns jsx element.
 */
const Sidebar = ({ children, course, params }: SidebarProps): JSX.Element => {
	if (params == null) {
		return null;
	}

	if (!course) {
		notFound();
	}

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [show, setShow, props] = useKeyboard(true, "KeyB");

	const toggle = () => {
		localStorage.setItem("key", `${!show}`);
		setShow(!show);
	};

	return (
		<section
			className={clsx("grid grid-flow-row grid-cols-1 lg:grid-cols-[960px]", {
				"2xl:grid-cols-[330px_960px] xl:gap-8 justify-center": show,
				"2xl:grid-cols-[0rem_960px] xl:gap-4 justify-center": !show,
			})}
		>
			<aside className={clsx("row-start-2 2xl:row-start-1 2xl:row-span-2")}>
				<button {...props} />
				<section className="max-h-[90vh] min-h-max py-5 bg-opacity-90 sticky top-20 overflow-scroll scrollbar overflow-x-hidden overflow-y-auto">
					{course.course?.chapters?.chapters?.map(
						({ slug, title, emogi, section }) => (
							<div key={slug}>
								{section.section && (
									<li className="flex gap-2 p-1">
										<span
											className="max-w-fit emogi hover:cursor-pointer"
											onClick={toggle}
										>
											{emogi.emogi}
										</span>
										<h5
											className={clsx("mt-1 italic font-extrabold uppercase", {
												hidden: !show,
											})}
										>
											{section?.section}
										</h5>
									</li>
								)}
								<div className={clsx("p-1", { "hidden xz": !show })}>
									<Link
										className="text-lg sidebar-subheading"
										href={`/courses/${course?.course?.slug}/${slug}`}
									>
										{title}
									</Link>
								</div>
							</div>
						),
					)}
				</section>
			</aside>
			{children}
		</section>
	);
};

export default Sidebar;
