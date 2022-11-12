import './card.css';
import Germany from '../../assets/images/germany.png';

const Card = ({ name, img, population, region, capital }) => {
	return (
		<li className='card__item'>
			<img
				className='card__item-img'
				src={img}
				alt={name}
				width='267'
				height='160'
			/>
			<div className='card__item-wrapper'>
				<h3 className='card__item-title'>{name}</h3>
				<span className='card__item-population'>
					<strong>Population:</strong> {population}
				</span>
				<span className='card__item-region'>
					<strong>Region:</strong> {region}
				</span>
				<span className='card__item-capital'>
					<strong>Capital:</strong> {capital}
				</span>
			</div>
		</li>
	);
};

export default Card;
