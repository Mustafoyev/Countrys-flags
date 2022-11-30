import './info.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Info = () => {
	const { theme } = useContext(ThemeContext);
	const [country, setCountry] = useState([]);
	const { name } = useParams();
	const [lang] = useTranslation();
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`https://restcountries.com/v3.1/name/${name}`)
			.then((res) => res.json())
			.then((data) => setCountry(data));
	}, [name]);

	return (
		<>
			<button
				onClick={() => navigate(-1)}
				className={`${theme === 'dark' ? 'info__link-dark' : 'info__link'}`}>
				{lang('info.infobut')}
			</button>
			<div
				className={`info__content ${
					country.length > 1 ? 'wrap' : 'info__content'
				}`}>
				{country.length ? (
					country.map((el) => (
						<>
							<img
								className={`info__img ${
									country.length > 1 ? 'mbottom' : 'info__img'
								}`}
								src={el.flags?.png}
								alt={el.name?.common}
								width={560}
								height={400}
							/>
							<div
								className={`info__country ${
									country.length > 1 ? 'mbottom' : 'info__country'
								}`}>
								<div className='info__wrapper'>
									<div className='info__left'>
										<h3
											className={`${
												theme === 'dark' ? 'info__title-dark' : 'info__title'
											}`}>
											{el?.name?.common}
										</h3>
										<ul className='info__left-list'>
											<li className='info__left-item'>
												<span className='info__item-span'>
													<strong>{lang('info.infonat')}: </strong>
													{el.name?.common}
												</span>
											</li>
											<li className='info__left-item'>
												<span className='info__item-span'>
													<strong>{lang('card.cartp')}: </strong>
													{el.population}
												</span>
											</li>
											<li className='info__left-item'>
												<span className='info__item-span'>
													<strong>{lang('card.cartr')}: </strong>
													{el.region}
												</span>
											</li>
											<li className='info__left-item'>
												<span className='info__item-span'>
													<strong>{lang('info.infosub')}: </strong>
													{el.subregion}
												</span>
											</li>
											<li className='info__left-item'>
												<span className='info__item-span'>
													<strong>{lang('card.cartc')}: </strong>
													{el.capital?.map((el) => (
														<span>{el}</span>
													))}
												</span>
											</li>
										</ul>
									</div>
									<ul
										className={`${
											theme === 'dark' ? 'info__right-dark' : 'info__right-list'
										}`}>
										<li className='info__right-item'>
											<span className='info__right-span'>
												<strong>{lang('info.infotop')}: </strong>
												{el.tld?.map((el) => (
													<span>{el}</span>
												))}
											</span>
										</li>
										<li className='info__right-item'>
											<span className='info__right-span'>
												<strong>{lang('info.infocur')}: </strong>
												{el.currencies[Object?.keys(el.currencies)]?.symbol}
											</span>
										</li>
										<li className='info__right-item'>
											<span className='info__right-span'>
												<strong>{lang('info.infolan')}: </strong>
												{el.languages[Object?.keys(el.languages)[0]]}
											</span>
										</li>
									</ul>
								</div>
								<div
									className={`${
										theme === 'dark' ? 'info__bottom-dark' : 'info__bottom'
									}`}>
									<span className='info__bottom-span'>
										{lang('info.infobor')}:{' '}
									</span>
									{el.borders?.map((el) => (
										<Link className='info__bottom-link' to={`/${el}`}>
											{el}
										</Link>
									))}
								</div>
							</div>
						</>
					))
				) : (
					<h1 className={`${theme === 'dark' ? 'error-dark' : 'error'}`}>
						404 NOT FOUND
					</h1>
				)}
			</div>
		</>
	);
};

export default Info;
