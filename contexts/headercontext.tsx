"use client";

import React, { useEffect } from "react";

type HeaderState = {
	title?: string;
	subtitle?: string;
	description?: string;
	page?: string;
	animation?: string;
	image?: string;
};

const HeaderContext = React.createContext<
	[HeaderState, React.Dispatch<React.SetStateAction<HeaderState>>] | undefined
>(undefined);

export function HeaderProvider({ children }: { children: React.ReactNode }) {
	const [header, setHeader] = React.useState({});
	return (
		<HeaderContext.Provider value={[header, setHeader]}>
			{children}
		</HeaderContext.Provider>
	);
}

export function useHeader() {
	const context = React.useContext(HeaderContext);
	if (context === undefined) {
		throw new Error("useHeader must be used within a HeaderProvider");
	}
	return context;
}

export function useSetHeader(header: HeaderState) {
	const [_, setHeader] = useHeader();

	useEffect(() => {
		return setHeader(header);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return _;
}
