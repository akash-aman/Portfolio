"use client";
import useAnimate from "/hooks/useAnimationWithoutState";
import Image from "next/image";
import project from "/assets/icons/project3.svg";
import techstack from "/assets/icons/fullstack.svg";
import about from "/assets/icons/about.svg";
import timeline from "/assets/icons/timeline2.svg";
import achievements from "/assets/icons/achievement.svg";
import blog from "/assets/icons/blog.svg";
import home from "/assets/icons/home.svg";
import course from "assets/icons/course.svg";
import Theme from "/components/theme";
import Link from "next/link";
import more from "/assets/icons/more.svg";
import vibrate from "../hooks/vibrate";
import clsx from "clsx";

type NavigationProps = {
	nav?: string;
	children?: JSX.Element[];
};

const Navigation = ({ nav }: NavigationProps) => {
	//const [animationProps] = useAnimate(isOpen, ['slide','slide-down'], isOpen);
	const [animationProps, buttonProps, hide] = useAnimate([
		"slide",
		"slide-down",
		"hide",
	]);

	const navs = [
		{
			icon: about, //home,
			link: "/",
			className: "grid",
			title: "Home",
			onClick: null,
		},
		// {
		//   icon: about,
		//   link: '/',
		//   className: 'xsm-h:sm:grid hidden',
		//   title: 'About',
		//   onClick: null
		// },
		// {
		// 	icon: course,
		// 	link: "/courses",
		// 	className: "xsm-h:grid hidden",
		// 	title: "Courses",
		// 	onClick: null,
		// },
		{
			icon: blog,
			link: "/blogs",
			className: "xsm-h:grid hidden",
			title: "Blogs",
			onClick: null,
		},
		{
			icon: project,
			link: "/projects",
			className: "md-h:sm:grid hidden",
			title: "Projects",
			onClick: null,
		},
		{
			icon: timeline,
			link: "/timeline",
			className: "md-h:sm:grid hidden",
			title: "TimeLine",
			onClick: null,
		},
		{
			icon: techstack,
			link: "/techstack",
			className: "md-h:sm:grid hidden",
			title: "TechStack",
			onClick: null,
		},
		// {
		//   icon: achievements,
		//   link: '/achievements',
		//   className: 'md-h:sm:grid hidden',
		//   title: 'Achievements',
		//   onClick: null
		// },
		{
			icon: more,
			link: "#",
			className: "md-h:md:hidden grid",
			title: "Menu",
			onClick: buttonProps.onClick,
		},
	];

	const navmodel = [
		// {
		//   icon: about,
		//   link: '/',
		//   name: 'Home',
		//   title: 'Home',
		//   description: 'Home',
		// },
		// {
		//   icon: course,
		//   link: '/courses',
		//   name: 'Courses',
		//   title: 'Courses',
		//   description: 'Courses',
		// },
		// {
		//   icon: blog,
		//   link: '/blogs',
		//   name: 'Blogs',
		//   title: 'Blogs',
		//   description: 'Blogs',
		// },
		{
			icon: project,
			link: "/projects",
			name: "Projects",
			title: "Projects",
			description: "Projects",
		},
		{
			icon: timeline,
			link: "/timeline",
			name: "TimeLine",
			title: "TimeLine",
			description: "TimeLine",
		},
		{
			icon: techstack,
			link: "/techstack",
			name: "TechStack",
			title: "TechStack",
			description: "TechStack",
		},
		// {
		// 	icon: achievements,
		// 	link: "/achievements",
		// 	name: "Achievements",
		// 	title: "Achievements",
		// 	description: "Achievements",
		// },
	];

	type Nav = {
		icon: string;
		index: number;
		onClick?: () => void;
	};

	const getNav = ({ index, icon, onClick }: Nav) => {
		return (
			<div
				key={index}
				onClick={onClick}
				className="
        grid
        h-16
        w-16
        justify-center
        content-center
        bg-[rgba(0,0,0,0.02)]
        dark:bg-[rgba(255,255,255,0.04)]
        hover:bg-[rgba(0,0,0,0.05)]
        hover:dark:bg-[rgba(255,255,255,0.12)] 
        rounded-full"
			>
				<Image
					className="
          h-10 
          w-10"
					src={icon}
					alt="project"
				/>
			</div>
		);
	};

	return (
		<>
			<nav
				className="
      shadow-[0px_90px_10px_95px_var(--dev-bg-colour)]
      sm:shadow-none
      sm:dark:shadow-none
      bg-[var(--light-theme-400)]
      dark:bg-[var(--dark-theme-200)]
      sm:bg-[var(--light-theme-500)]
      sm:dark:bg-[var(--dark-theme-100)]
      grid
      sm:grid
      sm:grid-rows-[repeat(auto-fit,5rem)]
      content-center
      justify-center
      sm:h-full
      sm:w-24
      sm:p-2
      grid-cols-[repeat(auto-fit,5rem)]
      grid-flow-col
      w-full
      h-24
      bottom-0
      z-[60]
      fixed
      nav
      "
			>
				{navs.map(({ icon, link, className, title, onClick }, index) => {
					return (
						<div
							key={link}
							onClick={() => {
								vibrate();
								if (!onClick) hide();
							}}
							className={clsx(
								"place-items-center content-center justify-center",
								className,
							)}
						>
							{link === "#" ? (
								getNav({ index, icon, onClick })
							) : (
								<Link title={title} href={link}>
									{" "}
									{getNav({ index, icon })}
								</Link>
							)}
						</div>
					);
				})}
				<Theme />
			</nav>
			<div
				{...animationProps}
				className={clsx(
					"md-h:sm:hidden fixed pb-[6rem] h-[calc(100dvh-0rem)] top-0 right-0 sm:w-[calc(100%-6rem)] sm:h-[100dvh] w-full z-50 hidden bg-[var(--light-theme-400)] dark:bg-[var(--dark-theme-200)] overflow-y-auto",
				)}
			>
				<div className="grid h-full pb-6 content-between">
					<div className="grid p-5 py-10 gap-5 ">
						<h1>Quick Links</h1>
						{navmodel.map((tech, index) => (
							<Link key={index} href={tech.link}>
								<div className=" bg-[var(--light-theme-600)] dark:bg-[var(--dark-theme-300)] hover:shadow-md rounded-lg p-4 flex gap-5">
									<div className="p-3 w-16 h-16 grid items-center bg-slate-300  bg-opacity-20 rounded-md">
										<Image
											src={tech.icon}
											alt={tech.name}
											className="w-full"
											width={40}
											height={40}
										/>
									</div>
									<div className="grid place-content-center">
										<p className="font-semibold text-xl h-fit dark:text-neutral-300 text-[var(--dev-text-color3)] m-0 p-0">
											{tech.name}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
					<section
						className="
				text-center 
				text-lg 
				copyright
				mt-3"
					>
						<p className="text-center text-lg copyright">
							Copyright © 2024 Akash Aman{" "}
							<i className="md:inline copyright hidden">|</i>{" "}
							<br className="block md:hidden" />
							<Link href="/terms">Terms & Conditions </Link>
							{" | "}
							<Link href="/privacy">Privay Policy</Link>
						</p>
					</section>
				</div>
			</div>
		</>
	);
};

export default Navigation;
