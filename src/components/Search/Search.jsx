import { useState } from 'react';
import './search.css';
import Input from '../Input/Input';
import Select from '../Select/Select';

const Search = ({ getValue, getSelVal }) => {
	const [value, setValue] = useState('');
	const [selval, setSelval] = useState('');
	getValue(value);
	getSelVal(selval);

	return (
		<>
			<section className='search'>
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
