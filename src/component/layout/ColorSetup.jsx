const ColorSetup = () => {
	return (
		<>
			<script
				dangerouslySetInnerHTML={{
					__html: `
	              (function() {
	                function setTheme(theme) {
	                  document.documentElement.classList.add(theme);
	                  localStorage.setItem('theme', theme);
	                }

	                let theme = localStorage.getItem('theme');
	                if (!theme) {
	                  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
	                  theme = prefersDarkScheme ? 'dark' : 'light';
	                }

	                document.documentElement.classList.add(theme);
	              })();
	            `,
				}}
			/>
		</>
	);
};

export default ColorSetup;
