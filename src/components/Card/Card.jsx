import './card.css';
import { Link } from 'react-router-dom';

const Card = ({ obj }) => {
	let count = 0;
	return (
		<li className='card__item'>
			<Link className='card__item-link' to={`/${obj.name.common}`}>
				<img
					className='card__item-img'
					src={obj.flags.svg}
					alt={obj.name.common}
					width='267'
					height='160'
				/>
				<div className='card__item-wrapper'>
					<h3 className='card__item-title'>{obj.name.common}</h3>
					<span className='card__item-population'>
						<strong>Population:</strong> {obj.population}
					</span>
					<span className='card__item-region'>
						<strong>Region:</strong> {obj.region}
					</span>
					<span className='card__item-capital'>
						<strong>Capital:</strong> {obj.capital}
					</span>
				</div>
			</Link>
		</li>
	);
};

export default Card;
