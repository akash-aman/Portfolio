import React from "react";

type AsideProps = {
	aside?: string;
	children?: JSX.Element[];
};

const aside = ({ aside }: AsideProps) => {
	return <div>aside</div>;
};

export default aside;
