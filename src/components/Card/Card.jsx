import './card.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Card = ({ obj }) => {
	const { theme } = useContext(ThemeContext);
	const [lang] = useTranslation();

	return (
		<li className={`${theme === 'dark' ? 'card__item-dark' : 'card__item'}`}>
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
						<strong>{lang('card.cartp')}:</strong> {obj.population}
					</span>
					<span className='card__item-region'>
						<strong>{lang('card.cartr')}:</strong> {obj.region}
					</span>
					<span className='card__item-capital'>
						<strong>{lang('card.cartc')}:</strong> {obj.capital}
					</span>
				</div>
			</Link>
		</li>
	);
};

export default Card;
