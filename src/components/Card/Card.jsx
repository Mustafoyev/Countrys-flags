import './card.css';
import Germany from '../../assets/images/germany.png';

const Card = () => {
	return (
		<>
			<li className='card__item'>
				<img
					className='card__item-img'
					src={Germany}
					alt='Germany'
					width='267'
					height='160'
				/>
				<div className='card__item-wrapper'>
					<h3 className='card__item-title'>Germany</h3>
					<span className='card__item-population'>
						<strong>Population:</strong> 81,770,900
					</span>
					<span className='card__item-region'>
						<strong>Region:</strong> Europe
					</span>
					<span className='card__item-capital'>
						<strong>Capital:</strong> Berlin
					</span>
				</div>
			</li>
		</>
	);
};

export default Card;
