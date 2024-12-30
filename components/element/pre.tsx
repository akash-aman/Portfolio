import React from "react";

const Pre = ({ node, children, className }) => {
	if (className?.split(" ")[0] === "text") {
		return <pre className={className}>{children}</pre>;
	}

	// check if class has name mermaid.
	if (className?.split(" ").includes("mermaid")) {
		return <pre className="mermaid">{children}</pre>;
	}

	return <>{children}</>;
};

export default Pre;
