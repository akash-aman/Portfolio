import { useEffect, useRef } from "react";

/**
 *
 * @param {string} spinnerClass : css class to be added to the spinner for fade out animation
 * @param {string} blockClass : css class to be added to the content for fade in animation
 * @returns {array} : [fadeOutProps, fadeInProps]
 */
const useAnimate = (blockClass?) => {
	const block = useRef(null);
	const button = useRef(null);

	const animate = () => {
		const blockRef = block.current;
		blockRef.offsetHeight;

		if (blockRef.classList.contains("hidden")) {
			blockRef.classList.remove("hidden");
			blockClass[1] ? blockRef.classList.remove(blockClass[1]) : null;
			blockClass[0] ? blockRef.classList.add(blockClass[0]) : null;
		} else {
			blockClass[0] ? blockRef.classList.remove(blockClass[0]) : null;
			blockClass[1] ? blockRef.classList.add(blockClass[1]) : null;
		}

		return () => {
			blockClass[0] ? blockRef.classList.remove(blockClass[0]) : null;
			blockClass[1] ? blockRef.classList.remove(blockClass[1]) : null;
		};
	};

	const hide = () => {
		const blockRef = block.current;
		blockRef.offsetHeight;

		if (!blockRef.classList.contains("hidden")) {
			blockClass[0] ? blockRef.classList.remove(blockClass[0]) : null;
			blockClass[1] ? blockRef.classList.add(blockClass[1]) : null;
		}

		return () => {
			blockClass[0] ? blockRef.classList.remove(blockClass[0]) : null;
			blockClass[1] ? blockRef.classList.remove(blockClass[1]) : null;
		};
	};

	const animationProps = {
		onAnimationEnd: () => {
			if (
				!block.current.classList.contains("hidden") &&
				block.current.classList.contains(blockClass[1])
			) {
				block.current.classList.add("hidden");
			}
			blockClass[0] ? block.current.classList.remove(blockClass[0]) : null;
			blockClass[1] ? block.current.classList.remove(blockClass[1]) : null;
		},
		ref: block,
		onClick: animate,
	};

	const buttonProps = {
		ref: button,
		onClick: animate,
	} as any;

	return [animationProps, buttonProps, hide];
};

export default useAnimate;
