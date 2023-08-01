"use client";
import { useSetHeader } from "/contexts/headercontext";

const Header = () => {
	useSetHeader({ title: "Blog ✅" });
	return null;
};

export default Header;
