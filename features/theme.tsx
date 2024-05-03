const ApplyTheme = () => {
	/**
	 * @description - Setting class before the page loads to prevent flash of light theme.
	 */
	const theme = `
	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
	}`;

	return <script dangerouslySetInnerHTML={{ __html: theme }} />;
};

export default ApplyTheme;
