import React from "react";
import Head from "next/head";

type SEOProps = {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
	children?: any;
};

const SEO = ({}: SEOProps) => {
	const seo = {
		title: "Akash Aman | Official | Full Stack Developer",
		description:
			"Welcome to the Akash Aman`s official website. Akash is a Software Developer working at rtCamp in India. On this website, You can read more about his work, achievements and blogs.",
		image: "/images/akash-aman.png",
		url: "https://akash.cx",
		twitterUsername: "sirakashaman",
	};

	return (
		<Head>
			<title>{seo.title}</title>
			<meta name="description" content={seo?.description} key="description" />
			<meta name="image" content={seo?.image} key="featuredImage" />

			<meta property="og:url" content={seo?.url} key="og:url" />
			<meta property="og:type" content="Markdown" key="og:type" />
			<meta property="og:title" content={seo?.title} key="og:title" />
			<meta property="og:image" content={seo?.image} key="og:image" />
			<meta property="og:site_name" content="akash.cx" />
			<meta
				property="og:description"
				content={seo?.description}
				key="og:description"
			/>

			<meta name="twitter:url" content="https://twitter.com/sirakashaman" />
			<meta
				name="twitter:card"
				content="summary_large_image"
				key="twitter:card"
			/>
			<meta name="twitter:image" content={seo?.image} key="twitter:image" />
			<meta name="twitter:title" content={seo?.title} key="twitter:title" />
			<meta
				name="twitter:creator"
				content={seo?.twitterUsername}
				key="twitter:creator"
			/>
			<meta
				name="twitter:description"
				content={seo?.description}
				key="twitter:description"
			/>

			<meta charSet="UTF-8" key="charSet" />

			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<meta name="application-name" content="PWA App" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="default" />
			<meta name="apple-mobile-web-app-title" content="PWA App" />
			<meta name="description" content="Best PWA App in the world" />
			<meta name="format-detection" content="telephone=no" />
			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="msapplication-config" content="/icons/browserconfig.xml" />
			<meta name="msapplication-TileColor" content="#2B5797" />
			<meta name="msapplication-tap-highlight" content="no" />
			<meta name="theme-color" content="#000000" />

			<link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
			<link
				rel="apple-touch-icon"
				sizes="152x152"
				href="/icons/touch-icon-ipad.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/icons/touch-icon-iphone-retina.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="167x167"
				href="/icons/touch-icon-ipad-retina.png"
			/>

			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/icons/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/icons/favicon-16x16.png"
			/>
			<link rel="manifest" href="/manifest.json" />
			<link
				rel="mask-icon"
				href="/icons/safari-pinned-tab.svg"
				color="#5bbad5"
			/>
			<link rel="shortcut icon" href="/favicon.ico" />
		</Head>
	);
};

export default SEO;
