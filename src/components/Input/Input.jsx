import './input.css';

const Input = () => {
	return (
		<label className='input-label'>
			<input
				className='input'
				type='search'
				placeholder='Search for a country…'
				aria-label='Search for a countr'></input>
		</label>
	);
};

export default Input;
