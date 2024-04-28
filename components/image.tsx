import React, { use } from "react";
import Image from "next/image";

const ImageComponent = ({ src, alt, sizes, height, width, ...fields }) => {
	if (!src) return <span></span>;

	if (src?.endsWith(".svg")) {
		// fetch the svg xml code.
		let Svg = use(fetch(src).then((res) => res.text()));

		return (
			<span
				className="w-[1.125rem] h-[1.125rem]"
				dangerouslySetInnerHTML={{ __html: Svg }}
			/>
		);
	}

	return (
		<Image
			sizes={sizes}
			src={src}
			alt={alt}
			height={height || "700"}
			width={width || "900"}
			{...fields}
		/>
	);
};

export default ImageComponent;
