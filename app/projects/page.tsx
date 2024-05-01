"use client";
import React, { useRef, useEffect } from "react";
import { useSetHeader } from "/contexts/headercontext";
import Image from "next/image";
import { projects } from "/lib/constant";

import "/styles/timeline.scss";

/**
 * This function generates the page.
 *
 * @returns
 */
const Page = () => {
	useSetHeader({ title: "Projects ⚒️" });

	const projectRef = useRef([]);
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const { isIntersecting } = entry;
					entry.target.classList.toggle("animate", isIntersecting);
				});
			},
			{ threshold: 0.1, rootMargin: "40% 0px -45% 0px" },
		);
		projectRef.current.forEach((el) => {
			observer.observe(el);
		});
	}, []);

	return (
		<div className="projects my-12 mx-3 grid grid-cols-2 grid-flow-row-dense">
			{projects.map(({ title, description, year, image, techstack }, index) => {
				const row = index % 2 === 0 ? "even-row" : "odd-row";
				return (
					<>
						<div
							key={index}
							ref={(el) => {
								projectRef.current[2 * index] = el;
							}}
							className={`${row} t-${index} relative timeline-detail`}
						>
							<div className="max-w-[700px] w-[700px] min-w-[60px] grid items-start">
								<div className="rounded-lg p-4 lg:p-7 bg-[#f6f6f6b0] dark:bg-[#292929] hover:shadow-lg">
									<p className="opacity-90 font-bold text-2xl [font-family:var(--font-heading)]">
										{title}
									</p>
									<p className="opacity-70 m-0 p-0">{description}</p>
									<div className="pt-4 grid justify-items-start grid-cols-[repeat(auto-fit,1.5rem);] gap-1">
										{techstack?.map((Tech, index) => {
											return (
												<div key={index} className="">
													<Tech className="w-6 h-6" />
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
						<div
							ref={(el) => {
								projectRef.current[2 * index + 1] = el;
							}}
							className={`${row} t-${index} relative timeline-year`}
						>
							<div className="min-w-[60px]">
								<h1 className="opacity-50 m-0 leading-[2rem_!important]">
									{year}
								</h1>
							</div>
							<figure className="pt-10">
								<Image
									src={image}
									alt={title}
									width={900}
									height={900}
									className="rounded-lg w-full h-auto mt-4"
								/>
							</figure>
						</div>
					</>
				);
			})}
		</div>
	);
};

export default Page;
