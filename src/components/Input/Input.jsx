import './input.css';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Input = ({ inpValue }) => {
	const { theme } = useContext(ThemeContext);
	const [lang] = useTranslation();
	return (
		<label className={`${theme === 'dark' ? 'inp-dark' : 'input-label'}`}>
			<input
				onChange={(evt) => inpValue(evt.target.value)}
				className='input'
				type='search'
				placeholder={lang('search.inp')}
				aria-label='Search for a countr'
			/>
		</label>
	);
};

export default Input;
