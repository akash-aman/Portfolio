import { useState, useEffect, useRef } from "react";

/**
 * Hook to capture keyboard press events.
 *
 * @param {boolean} initialState : initial state of the component
 * @param {string} key 			 : key pressed with ctrl key
 * @returns {array} 			 : [show, setShow, props]
 */
const useKeyboard = (initialState, key) => {
	const [show, setShow] = useState(initialState);
	const toggleButton = useRef(null);

	const listenKeyPress = (e) => {
		if (e.code === key && e.ctrlKey) {
			e.preventDefault();
			toggleButton?.current?.click();
		}
	};

	useEffect(() => {
		localStorage.getItem("key") === "true" && setShow(true);
		document?.addEventListener("keydown", listenKeyPress, true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let props = {
		ref: toggleButton,
		style: { display: "none" },
		onClick: () => {
			setShow(!show);
			localStorage.setItem("key", `${!show}`);
		},
	};

	return [show, setShow, props];
};

export default useKeyboard;
