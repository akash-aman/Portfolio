import React from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "assets/images/picture.webp";
import {
	GitHub,
	Twitter,
	Youtube,
	LinkedIn,
	Gmail,
	NextJS,
	Sass,
	Tailwind,
	MDX,
	Dev,
} from "../assets/icons/social";
type FooterProps = {
	footer?: string;
	children?: JSX.Element[];
};
const footer = ({ footer }: FooterProps) => {
	const social = [
		{
			Icon: Youtube,
			link: "https://www.youtube.com/@DevZest",
			title: "YouTube",
		},
		{
			Icon: GitHub,
			link: "https://github.com/akash-aman/",
			title: "GitHub",
		},
		{
			Icon: Twitter,
			link: "https://twitter.com/sirakashaman",
			title: "Twitter",
		},
		{
			Icon: LinkedIn,
			link: "https://www.linkedin.com/in/aman-akash/",
			title: "LinkedIn",
		},
		{
			Icon: Gmail,
			link: "mailto:sir.akashaman@gmail.com",
			title: "Gmail",
		},
	];

	return (
		<div
			className="
				grid
				w-full
				h-full
				p-4
				md:p-[2rem_2rem]
				lg:pr-40
				lg:pl-20
				content-center"
		>
			<section
				className="
					grid
					justify-center
					mb-4
					sm:grid-cols-[repeat(auto-fit,_minmax(10rem,40rem)_minmax(10rem,13rem))]"
			>
				<div
					className="
						grid
						content-center
						text-center
						text-xl"
				>
					<div>
						<i>Created with </i>
						<i>
							<NextJS className="w-14 h-14 inline" />
						</i>
						<i> </i>
						<i>
							<Sass className="w-8 h-8 inline" />
						</i>
						<i> </i>
						<i>
							<Tailwind className="w-8 h-8 inline" />
						</i>
						<i> & </i>
						<i>
							<MDX className="w-10 h-10 inline" />
						</i>
						<br className="md:hidden" />
						<i> By Akash Aman</i>
						<i>
							<Dev className="w-8 h-8 inline" />
						</i>
					</div>
				</div>
				<div
					className="
						grid 
						justify-center
						row-start-1
						sm:col-start-2"
				>
					<Image
						src={profile}
						className="
							rounded-full
							m-3
							h-24 
							w-24
							sm:h-28 
							sm:w-28"
						alt="Profile pic"
					/>
				</div>
			</section>
			<nav
				className="
					grid
					grid-flow-col
					grid-cols-[repeat(auto-fit,_4rem)]
					sm:grid-cols-[repeat(auto-fit,_5rem)]
					gap-3 
					justify-center"
			>
				{social.map(({ Icon, link, title }, index) => (
					<div key={index}>
						<Link title={title} href={link} target="_blank">
							<div
								className="
									grid
									h-16
									w-16
									sm:h-20 
									sm:w-20
									justify-center
									content-center
									bg-[rgba(0,0,0,0.02)]
									hover:bg-[rgba(0,0,0,0.05)]
									dark:bg-[rgba(255,255,255,0.04)]
									hover:dark:bg-[rgba(255,255,255,0.12)] 
									rounded-full"
							>
								<Icon
									className="
										h-8
										w-8
										sm:h-[2.2rem] 
										sm:w-[2.2rem]"
								/>
							</div>
						</Link>
					</div>
				))}
			</nav>

			<section
				className="
            text-center 
            text-lg 
            copyright
            mt-3"
			>
				<p className="text-center text-lg copyright">
					Copyright © 2024 Akash Aman{" "}
					<i className="md:inline copyright not-italic hidden">|</i>{" "}
					<br className="block md:hidden" />
					<Link href="/terms">Terms & Conditions </Link>
					{" | "}
					<Link href="/privacy">Privay Policy</Link>
				</p>
			</section>
		</div>
	);
};

export default footer;
