const Header = () => {
	const view = `
		<div className="Header-main">
			<div className="Header-logo">
				<h1>
					<a href="/">
						100tifi.co
					</a>
				</h1>
				<h3>A Project example for this 
					<a href="https://platzi.com/clases/spa-javascript/">Platzi Course</a>
				</h3>
			</div>
			<div className="Header-nav">
				<a href="#/about/">
					About
				</a>
			</div>
		</div>
		`;
		return view;
};

export default Header;