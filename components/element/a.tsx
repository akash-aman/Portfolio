import React from "react";
import { Leetcode } from "/assets/icons/icon";
import Link from "next/link";

const A = ({ children, className, href, level }) => {
	if (className == "leetcode") {
		return (
			<Link href={href}>
				<div className="bg-neutral-100 dark:bg-neutral-800 p-6 sm:p-6 justify-between rounded-lg grid grid-flow-col  gap-5 sm:gap-5">
					<div className="grid grid-flow-col gap-5 sm:gap-5">
						<Leetcode className="w-8" />
                        <div>
                            {children}
                        </div>
					</div>
					<div className={`${level} inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-shadow focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80`}>{level}</div>
				</div>
			</Link>
		);
	}

	return (
		children
	);
};

export default A;
