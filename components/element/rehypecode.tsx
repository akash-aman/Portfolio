"use client";
import { FC, ReactNode, useRef, useState } from "react";
import { Copy, Tick } from "/assets/icons/icon";

interface CodeProps {
	children: ReactNode;
	className: string;
	inline: boolean;
}

const Code: FC<CodeProps> = ({ children, className, inline }) => {
	const match = /language-(\w+)/.exec(className || "");
	const codeRef = useRef<HTMLPreElement>(null);
	const [copied, setCopied] = useState(false);

	if (inline) {
		return <code className={`${className?.split(" ")[0]}`}>{children}</code>;
	}

	const copyToClipboard = (event) => {
		if (codeRef.current) {
			navigator.clipboard.writeText(codeRef.current.innerText);
			setCopied(true);

			const timeOut = setTimeout(() => {
				setCopied(false);
				clearTimeout(timeOut);
			}, 3000);
		}
	};

	return (
		<>
			<div className="single-tab rounded-t-xl py-1 px-4  bg-[var(--light-theme-500)] dark:bg-[rgba(64,64,64,0.8)] flex max-w-min">
				{match[1]}
			</div>
			<pre className="code overflow-x-auto relative">
				<div className="prismjs rounded-b-md rounded-tr-md bg-[var(--light-theme-500)] dark:bg-[rgba(64,64,64,0.3)] scrollbar overflow-x-auto p-4">
					<button
						title="Copy to clipboard"
						onClick={copyToClipboard}
						className="p-2 m-4 rounded-lg ctc absolute right-0 top-0 bg-[white] dark:bg-[rgba(64,64,64,1)]"
					>
						{copied ? (
							<Tick className="h-4 w-4" />
						) : (
							<Copy className="h-4 w-4" />
						)}
					</button>
					<code ref={codeRef} className={match[0]}>
						{children}
					</code>
				</div>
			</pre>
		</>
	);
};

export default Code;
