"use client";
import "/styles/header.css";
import React from "react";
import { useHeader } from "../contexts/headercontext";
import useAnimate from "../hooks/useAnimate";
import Image from "next/image";
import profilePicture from "assets/images/AI1.jpg";
import { Dev } from "../assets/icons/social";

type HeaderProps = {
	header?: string;
	children?: JSX.Element[];
};

const Header = ({ header }: HeaderProps) => {
	const [headerState] = useHeader();

	const [animationProps] = useAnimate(headerState, "slide");

	const getHeader = () => {
		switch (headerState.page) {
			case "home":
				return (
					<div
						{...animationProps}
						className="
							p-8
							h-full
							grid
							content-center
							place-items-center
							justify-center
							gap-5
							sm:grid-cols-[repeat(auto-fit,_minmax(10rem,13rem)_minmax(10rem,30rem))]
							sm:gap-20"
					>
						<Image
							title="Mid Journey Profile Picture of Akash Aman 👀"
							src={profilePicture}
							className="
								rounded-full 
								h-32 
								w-32 
								sm:h-52
								sm:w-52"
							alt="Profile pic"
						/>

						<div
							className="
								grid
								content-center
								justify-center"
						>
							<h1 className="opacity-90 m-0">{headerState.title}</h1>
							<h1 className="opacity-50 m-0">
								{headerState.subtitle}
								<Dev className="w-8 h-8 inline" />
							</h1>
						</div>
					</div>
				);
			default:
				return (
					<div
						{...animationProps}
						className="
							h-full
							grid
							content-center
							justify-center"
					>
						<h1 className="font-black">{headerState.title}</h1>
					</div>
				);
		}
	};

	return getHeader();
};

export default Header;
