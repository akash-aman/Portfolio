import React from "react";

const Pre = ({ node, children, className }) => {
	if (className?.split(" ")[0] === "text") {
		return <pre className={className}>{children}</pre>;
	}

	// check if class has name mermaid.
	if (className?.split(" ").includes("mermaid")) {
		return <div className="overflow-x-auto my-16">
			<pre className="mermaid">
				{children}
			</pre>
		</div>;
	}

	return <>{children}</>;
};

export default Pre;
