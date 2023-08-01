"use client";
import clsx from "clsx";
import Link from "next/link";
import useKeyboard from "/hooks/useKeyboard";
import { CourseSidebarQuery } from "/generated/graphql";
import { notFound } from "next/navigation";
import React from "react";

type SidebarProps = {
	children: React.ReactNode;
	section: CourseSidebarQuery;
	params: any;
};

const Sidebar = ({ children, section, params }: SidebarProps): JSX.Element => {
	if (params == null) {
		return null;
	}

	if (section.course.data == null) {
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
			className={clsx("grid lg:grid-flow-row xl:grid-flow-col", {
				"xl:grid-cols-[330px_1fr] xl:gap-8": show,
				"xl:grid-cols-[100px_1fr] xl:gap-4": !show,
			})}
		>
			<aside className={clsx("row-start-2 xl:row-start-1")}>
				<button {...props} />
				<section className="max-h-[90vh] min-h-max py-5 bg-opacity-90 sticky top-20 overflow-scroll scrollbar overflow-x-hidden overflow-y-auto">
					{section.course.data.attributes.chapters.map(
						({ chapter, Section, Emogi, id }) => {
							const courseSlug = section.course.data.attributes.Slug;
							const chapterSlug = chapter.data.attributes.Slug;
							const chapterTitle = chapter.data.attributes.Title;
							return (
								<div key={id}>
									{Section !== "false" ? (
										<li className="flex gap-2 p-1">
											<span
												className="max-w-fit emogi hover:cursor-pointer"
												onClick={toggle}
											>
												{Emogi}
											</span>
											<h5
												className={clsx(
													"mt-1 italic font-extrabold uppercase",
													{
														hidden: !show,
													},
												)}
											>
												{Section}
											</h5>
										</li>
									) : null}
									<div className={clsx("p-1", { "hidden xz": !show })}>
										<Link
											className="text-lg sidebar-subheading"
											href={`${chapterSlug}`}
										>
											{chapterTitle}
										</Link>
									</div>
								</div>
							);
						},
					)}
				</section>
			</aside>
			{children}
		</section>
	);
};

export default Sidebar;
