"use client";
import React from "react";
import BQ from "../../assets/icons/bq";

const Blockquote = ({ children, className }) => {
	if (className == "notice") {
		<div className="blockquote grid grid-cols-[4rem_1fr] gap-4 my-8">
			<BQ className="w-full" />
			<div>{children}</div>
		</div>;
	}

	return (
		<div className="blockquote grid grid-cols-[4rem_1fr] gap-4">
			<BQ className="w-full" />
			<div>{children}</div>
		</div>
	);
};

export default Blockquote;
