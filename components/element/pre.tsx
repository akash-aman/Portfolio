import React from "react";

const Pre = ({ node, children, className }) => {
	if (className?.split(" ")[0] === "text") {
		return <pre className={className}>{children}</pre>;
	}

	return <>{children}</>;
};

export default Pre;
