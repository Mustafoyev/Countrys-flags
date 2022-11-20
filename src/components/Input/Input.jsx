import './input.css';

const Input = ({ inpValue }) => {
	return (
		<label className='input-label'>
			<input
				onChange={(evt) => inpValue(evt.target.value)}
				className='input'
				type='search'
				placeholder='Search for a country…'
				aria-label='Search for a countr'
			/>
		</label>
	);
};

export default Input;
