import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: {
		template: "%s | Courses",
		default: "Courses",
	},
};

export default async function Layout({ children, params }) {
	return <>{children}</>;
}
