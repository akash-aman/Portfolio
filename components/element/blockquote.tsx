import React from "react";
import BQ from "../../assets/icons/bq";
import { Think } from "/assets/icons/icon";

const Blockquote = ({ children, className }) => {
	if (className == "think") {
		return (
			<div className="blockquote bg-neutral-100 dark:bg-neutral-800 p-10 sm:p-10 rounded-lg">
				<Think className="w-16 inline align-bottom mr-4" />
				<div className="inline Swing-King">{children}</div>
			</div>
		);
	}

	return (
		<div className="blockquote bg-neutral-100 dark:bg-neutral-800 p-10 sm:p-10 rounded-lg">
			<BQ className="w-16 inline align-bottom mr-4" />
			<div className="inline Swing-King">{children?.[1]?.props?.children?.[0]}</div>
		</div>
	);
};

export default Blockquote;
