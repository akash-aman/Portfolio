import Link from "next/link";
import React from "react";
import { gqlAPI } from "/lib/constant";
import Image from "next/image";
import ImageComponent from "./image"; 

const Card = ({ attributes, id, type }) => {
	const { Title, Slug, Description, FeaturedImage, tags } = attributes;
	return (
		<Link key={id} href={`/${type}/${Slug}`}>
			<div className="bg-[var(--light-theme-500)] dark:bg-[rgba(255,255,255,0.05)] rounded-t-lg rounded-b-lg p-5">
				{FeaturedImage.data
					? (() => {
							/**
							 * Destructuring attributes.
							 */
							const { caption, formats } = FeaturedImage.data.attributes;
							const { url, width, height } = formats.medium;
							return (
								<div className="w-full mb-4 rounded-t-md rounded-b-md aspect-video overflow-hidden place-content-center grid h-auto">
									<ImageComponent
										className="w-full h-[inherit] object-cover"
										src={url}
										alt={caption}
										width={width}
										height={height}
										title={Title}
									/>
								</div>
							);
					  })()
					: null}
				<p className="font-bold my-6 headFont capitalize">{Title}</p>
				<p className="text-sm mb-8">{Description}</p>

				{tags.data.length > 0 && (
					<div className="m-0 p-0 leading-3 mt-4">
						{tags.data.map((tag) => {
							return (
								<>
									<div className="inline-block ">
										<i className="leading-2 grid items-center bg-[rgba(255,255,255,0.6)]  dark:bg-slate-300 dark:bg-opacity-5 grid-flow-col gap-1 rounded-md not-italic m-[2px] py-[2px] p-1">
											<ImageComponent
												className="inline align-middle"
												src={tag.attributes.FeaturedImage.data.attributes.url}
												width={18}
												height={18}
												title={tag.attributes.Name}
												alt={
													tag.attributes.FeaturedImage.data.attributes
														.caption || tag.attributes.Name
												}
												tags={["media",tag.attributes.FeaturedImage.data.id]}
											/>{" "}
											<span
												className="font-light text-xs text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.4)]"
											>
												{tag.attributes.Name}
											</span>
										</i>
									</div>
								</>
							);
						})}
					</div>
				)}
			</div>
		</Link>
	);
};

export default Card;
