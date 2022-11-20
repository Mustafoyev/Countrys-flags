import './select.css';

const Select = ({ selectVal }) => {
	return (
		<>
			<select
				className='select'
				onChange={(evt) => selectVal(evt.target.value)}>
				<option>Filter by Region</option>
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
