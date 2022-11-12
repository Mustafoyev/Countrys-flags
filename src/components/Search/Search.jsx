import './search.css';
import Input from '../Input/Input';
import Select from '../Select/Select';

const Search = () => {
	return (
		<>
			<section className='search'>
				<div className='container'>
					<div className='search__inner'>
						<form
							className='search__form'
							method='Post'
							action='https://echo.htmlacademy.ru/'>
							<Input />
							<Select />
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Search;
