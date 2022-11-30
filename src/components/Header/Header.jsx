import './header.css';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Header = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const [lang, i18n] = useTranslation();

	return (
		<>
			<header className={` ${theme === 'dark' ? 'darker' : 'site-header'}`}>
				<div className='container'>
					<div className='site-header__inner'>
						<h2 className='site-header__title'>{lang('header.htitle')}</h2>
						<div className='site-header__selects'>
							<div className='site-header__mode'>
								<select
									className='site-header__sel'
									defaultValue={theme}
									onChange={(e) => setTheme(e.target.value)}>
									<option value='dark'>{lang('header.dmode')}</option>
									<option value='light'>{lang('header.lmode')}</option>
								</select>
							</div>
							<select
								defaultValue={i18n.language}
								onChange={(e) => {
									window.localStorage.setItem('lang', e.target.value);
									i18n.changeLanguage(e.target.value);
								}}
								className='site-header__lang'>
								<option value='en'>EN</option>
								<option value='uz'>UZ</option>
							</select>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
