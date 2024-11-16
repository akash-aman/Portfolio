import remarkGfm from "remark-gfm";
import remarkToc from "../plugins/remarkToc";
import remarkTocRM from "../plugins/remarkTocRM";
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
	className?: string;
};

const MDBlog: FC<BlogProps> = ({ markdown, ...attributes }: BlogProps) => {

	return (
		<>
			<div className="toc">
				<ReactMarkdown
					{...attributes}
					// eslint-disable-next-line react/no-children-prop
					components={elements}
					children={markdown}
					remarkPlugins={[remarkToc]}
				/>
			</div>
			<ReactMarkdown
				{...attributes}
				// eslint-disable-next-line react/no-children-prop
				components={elements}
				children={markdown}
				remarkPlugins={[remarkTocRM, remarkMath, remarkGfm]}
				rehypePlugins={[
					rehypeKatex,
					rehypePrism,
					rehypeSlug,
					rehypeRaw,
					rehypeSanitize,
				]}
			/>
		</>
	);
};

export default MDBlog;
