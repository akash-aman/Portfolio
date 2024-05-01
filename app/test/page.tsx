import React, { use } from "react";
//import { getDBRows } from '../api/notion/route'

const page = () => {
	// const data = use(getDBRows());
	// console.log(data);

	return (
		<div>
			{/* {
				data.results.map((row: any) => {
					console.log(row.properties);
					
					return (
						<div>
							{row.properties.Name.title[0].plain_text}
						</div>
					)
				})
			} */}
		</div>
	);
};

export default page;
