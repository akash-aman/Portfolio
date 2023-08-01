"use client";
import { useSetHeader } from "/contexts/headercontext";

const HeaderAnimate = ({ data }) => {
	useSetHeader(data);
	return null;
};

export default HeaderAnimate;
