import './header.css';

const Header = () => {
	return (
		<>
			<header className='site-header'>
				<div className='container'>
					<div className='site-header__inner'>
						<h2 className='site-header__title'>Where in the world?</h2>
						<span className='site-header__mode'>Dark Mode</span>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
