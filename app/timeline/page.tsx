"use client";
import React, { useEffect, useRef } from "react";
import { useSetHeader } from "/contexts/headercontext";
import { timeLine } from "/lib/constant";
import "/styles/timeline.scss";

const Page = () => {
	useSetHeader({ title: "Timeline ⌛" });
	const timelineRef = useRef([]);

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
		timelineRef.current.forEach((el) => {
			observer.observe(el);
		});
	}, []);

	return (
		<div className="timeline my-12 mx-3 grid grid-cols-2 grid-flow-row-dense">
			{timeLine.map(({ title, description, year }, index) => {
				const row = index % 2 === 0 ? "even-row" : "odd-row";
				return (
					<>
						<div
							ref={(el) => (timelineRef.current[2 * index] = el)}
							className={`${row} t-${index} relative timeline-detail`}
						>
							<div className="max-w-[400px] w-[400px] min-w-[60px] rounded-lg p-4 lg:p-10 bg-[#f6f6f6b0] dark:bg-[#292929] hover:shadow-lg ">
								<p className="opacity-90 font-thin text-2xl mb-4 [font-family:var(--font-heading)]">
									{title}
								</p>
								<p className="opacity-70 m-0 p-0">{description}</p>
							</div>
						</div>
						<div
							ref={(el) => (timelineRef.current[2 * index + 1] = el)}
							className={`${row} t-${index} relative timeline-year`}
						>
							<div className="min-w-[60px]">
								<h1 className="opacity-50 m-0 leading-[2rem_!important]">
									{year}
								</h1>
							</div>
						</div>
					</>
				);
			})}
		</div>
	);
};

export default Page;
