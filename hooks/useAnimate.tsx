import { useEffect, useRef } from "react";

/**
 *
 * @param {string} spinnerClass : css class to be added to the spinner for fade out animation
 * @param {string} blockClass : css class to be added to the content for fade in animation
 * @returns {array} : [fadeOutProps, fadeInProps]
 */
const useAnimate = (dependency?, blockClass?, visiblity?) => {
	const block = useRef(null);

	useEffect(() => {
		const blockRef = block.current;
		blockRef.offsetHeight;
		blockRef.classList.add(blockClass ?? "slide");

		return () => blockRef.classList.remove(blockClass ?? "slide");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dependency]);

	const animationProps = {
		onAnimationEnd: () => block.current.classList.remove(blockClass ?? "slide"),
		ref: block,
	};

	return [animationProps];
};

export default useAnimate;
