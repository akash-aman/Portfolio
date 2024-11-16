import React from "react";

export const H1 = (props) => {
	return <h1 id={props.id} className={`h1 ${props.className}`}>{props.children}</h1>;
};

export const H2 = (props) => {
	return <h2 id={props.id} className={`h2 ${props.className}`}>{props.children}</h2>;
};

export const H3 = (props) => {
	return <h3 id={props.id} className={`h3 ${props.className}`}>{props.children}</h3>;
};

export const H4 = (props) => {
	return <h4 id={props.id} className={`h4 ${props.className}`}>{props.children}</h4>;
};

export const H5 = (props) => {
	return <h5 id={props.id} className={`h5 ${props.className}`}>{props.children}</h5>;
};

export const H6 = (props) => {
	return <h6 id={props.id} className={`h6 ${props.className}`}>{props.children}</h6>;
};
