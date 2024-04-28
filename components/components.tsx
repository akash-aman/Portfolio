import React from "react";
import { Components } from "react-markdown";
import Code from "./element/rehypecode";
import MultiCode from "./element/multicode";
import Blockquote from "./element/blockquote";
import P from "./element/p";
import Pre from "./element/pre";
import { Ul, Ol, Li } from "/components/element/list";
import { H1, H2, H3, H4, H5, H6 } from "/components/element/heading";
import { Span } from "/components/element/span";
import { U } from "/components/element/html";
import ImageComponent from "/components/image";

export const elements: { [key: string]: React.ElementType | Components } = {
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	h6: H6,
	p: P,
	ul: Ul,
	ol: Ol,
	li: Li,
	pre: Pre,
	u: U,
	span: Span,
	img: ImageComponent,
	code: Code,
	multicode: MultiCode,
	blockquote: Blockquote,
};
