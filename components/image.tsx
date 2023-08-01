import React, { use } from 'react'
import Image from 'next/image'

const ImageComponent = (props) => {

	const imageProps = {
		...props,
		src: "https://strapi.under19.in" + props?.src || "",
	}
	if (props?.src?.endsWith('.svg')) {
		// fetch the svg xml code.
		let Svg = use(fetch(imageProps.src).then(res => res.text()));

		return (
			<span className='w-[1.125rem] h-[1.125rem]' dangerouslySetInnerHTML={{ __html: Svg }} />
		)
	}
	if (!props?.width && !props?.height) {
		return (
			<span className='grid justify-center bg-slate-700 dark:bg-slate-300 dark:bg-opacity-5 bg-opacity-5 rounded-lg p-2 md:p-5'>
				<Image className='rounded-md' alt={imageProps?.alt} src={imageProps?.src} sizes='(min-width: 1200px) 45vw, (min-width: 900px) 60vw, 100vw' width={props.width || "900" } height={props.width || "700" } />
			</span>
		)
	}

	return (
		<Image sizes='(min-width: 1200px) 45vw, (min-width: 900px) 60vw, 100vw' alt={imageProps?.alt} src={imageProps?.src} width={imageProps?.width} height={imageProps?.height} />
	)

}

export default ImageComponent