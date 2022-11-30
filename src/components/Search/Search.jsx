import { useState } from 'react';
import './search.css';
import Input from '../Input/Input';
import Select from '../Select/Select';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Search = ({ getValue, getSelVal }) => {
	const { theme } = useContext(ThemeContext);
	const [value, setValue] = useState('');
	const [selval, setSelval] = useState('');
	getValue(value);
	getSelVal(selval);

	return (
		<>
			<section className={`${theme === 'dark' ? 'search-dark' : 'search'}`}>
				<div className='container'>
					<div className='search__inner'>
						<form className='search__form' method='Post'>
							<Input inpValue={setValue} />
							<Select selectVal={setSelval} />
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Search;
