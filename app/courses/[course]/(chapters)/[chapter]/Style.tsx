"use client";
import React from "react";

const Style = ({ params }) => {
	return (

		<style jsx global>
			{`
				.dark .${params.chapter} {
					color: #fff;
				}
				.${params.chapter} {
					color: #000;
				}
				.div-${params.chapter} > div {
					display: none;
				}
				.div-${params.chapter} > span {
					display: flex;
				}
			`}
		</style>
	);
};

export default Style;
