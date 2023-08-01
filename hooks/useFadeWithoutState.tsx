import { useEffect, useRef } from "react";
import "./useFade.css";

/**
 *
 * @param {string} spinnerClass : css class to be added to the spinner for fade out animation
 * @param {string} contentClass : css class to be added to the content for fade in animation
 * @returns {array} : [fadeOutProps, fadeInProps]
 */
const useFade = (spinnerClass?, contentClass?) => {
	const spinner = useRef(null);
	const content = useRef(null);

	useEffect(() => {
		content?.current.classList.add(spinnerClass ?? "xz");
		spinner?.current.classList.add(contentClass ?? "zz");
	}, []);

	const fadeOutProps = {
		onAnimationEnd: () => (spinner.current.style.display = "none"),
		ref: spinner,
	};

	const fadeInProps = {
		ref: content,
	};

	return [fadeOutProps, fadeInProps];
};

export default useFade;
