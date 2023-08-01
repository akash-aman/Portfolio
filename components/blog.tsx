import remarkGfm from "remark-gfm";
import remarkToc from "../plugins/remarkToc";
import remarkMath from "remark-math"; //'../plugins/remarkMath'
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex"; //'../plugins/rehypeKatex'
import rehypeSanitize from "../plugins/rehypeSanitize";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { elements } from "./components";
import rehypePrism from "rehype-prism-plus";

type BlogProps = {
	markdown?: string;
};

const MDBlog: FC<BlogProps> = ({ markdown }: BlogProps) => {
	return (
		<ReactMarkdown
			// eslint-disable-next-line react/no-children-prop
			components={elements}
			children={markdown}
			remarkPlugins={[remarkMath, remarkToc, remarkGfm]}
			rehypePlugins={[
				rehypeKatex,
				rehypePrism,
				rehypeSlug,
				rehypeRaw,
				rehypeSanitize,
			]}
		/>
	);
};

export default MDBlog;
