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

		if (dependency) {
			blockRef.classList.remove("hidden");
			blockRef.classList.remove(blockClass[1]);
			blockRef.classList.add(blockClass[0]);
		} else {
			blockRef.classList.remove(blockClass[0]);
			blockRef.classList.add(blockClass[1]);
		}

		return () => {
			blockRef.classList.remove(blockClass[0]);
			blockRef.classList.remove(blockClass[1]);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dependency]);

	const animationProps = {
		onAnimationEnd: () => {
			block.current.classList.remove(blockClass[0]);
			block.current.classList.remove(blockClass[1]);
			if (!dependency) {
				block.current.classList.add("hidden");
			}
		},
		ref: block,
	};

	return [animationProps];
};

export default useAnimate;
