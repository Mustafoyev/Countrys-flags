import './select.css';

const Select = () => {
	return (
		<>
			<select className='select'>
				<option selected disabled>
					Filter by Region
				</option>
				<option>Africa</option>
				<option>America</option>
				<option>Asia</option>
				<option>Europe</option>
				<option>Oceania</option>
			</select>
		</>
	);
};

export default Select;
