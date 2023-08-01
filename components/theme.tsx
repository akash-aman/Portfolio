"use client";
import React from "react";
import "/styles/header.css";
import useTheme from "../hooks/useTheme";
import useAnimate from "../hooks/useAnimate";

const Theme = () => {
	const [theme, themeState] = useTheme(true);
	const [animate] = useAnimate(themeState);

	return (
		<div
			{...theme}
			{...animate}
			className="
			sm:absolute
			justify-center
			content-center
			grid
			sm:left-0
			sm:top-4
			sm:w-[100%]
			z-50
        "
		>
			<div className="block dark:hidden text-[2.1rem]">🌤️</div>
			<div className="dark:block hidden text-[2.1rem]">🌙</div>
		</div>
	);
};

export default Theme;
