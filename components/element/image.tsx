import React from "react";
import Image from "next/image";

const image = ({ node, ...props }) => {
	return (
		<Image
			src={props.src}
			alt="Picture of the author"
			width={1000}
			height={1000}
			placeholder="blur"
			blurDataURL={props.src}
		/>
	);
};

export default image;
