import React from "react";

export const Ul = (props) => {
	return <ul className="ul">{props.children}</ul>;
};

export const Ol = (props) => {
	return <ol className="ol">{props.children}</ol>;
};

export const Li = (props) => {
	return <li className="li list-outside ml-6">{props.children}</li>;
};
