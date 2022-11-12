import './input.css';
import Icon from '../../assets/icons/search.svg';

const Input = () => {
	return (
		<>
			<input
				className='input'
				type='search'
				placeholder='Search for a country…'
				aria-label='Search for a countr'></input>
		</>
	);
};

export default Input;
