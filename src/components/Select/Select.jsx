import './select.css';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Select = ({ selectVal }) => {
	const { theme } = useContext(ThemeContext);
	const [lang] = useTranslation();

	return (
		<>
			<select
				className={`${theme === 'dark' ? 'sel-dark' : 'select'}`}
				onChange={(evt) => selectVal(evt.target.value)}>
				<option value={'All'}>{lang('search.sel')}</option>
				<option value={'Africa'}>Africa</option>
				<option value={'America'}>America</option>
				<option value={'Asia'}>Asia</option>
				<option value={'Europe'}>Europe</option>
				<option value={'Oceania'}>Oceania</option>
				<option value={'Antarctic'}>Antarctic</option>
			</select>
		</>
	);
};

export default Select;
