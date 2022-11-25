import './info.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Info = () => {
	const [country, setCountry] = useState([]);
	const { name } = useParams();

	useEffect(() => {
		fetch(`https://restcountries.com/v3.1/name/${name}`)
			.then((res) => res.json())
			.then((data) => setCountry(data));
	}, [name]);

	return (
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
									<h3 className='info__title'>{el?.name?.common}</h3>
									<ul className='info__left-list'>
										<li className='info__left-item'>
											<span className='info__item-span'>
												<strong>Native Name: </strong>
												{el.name?.common}
											</span>
										</li>
										<li className='info__left-item'>
											<span className='info__item-span'>
												<strong>Population: </strong>
												{el.population}
											</span>
										</li>
										<li className='info__left-item'>
											<span className='info__item-span'>
												<strong>Region: </strong>
												{el.region}
											</span>
										</li>
										<li className='info__left-item'>
											<span className='info__item-span'>
												<strong>Sub Region: </strong>
												{el.subregion}
											</span>
										</li>
										<li className='info__left-item'>
											<span className='info__item-span'>
												<strong>Capitel: </strong>
												{el.capital?.map((el) => (
													<span>{el}</span>
												))}
											</span>
										</li>
									</ul>
								</div>
								<ul className='info__right-list'>
									<li className='info__right-item'>
										<span className='info__right-span'>
											<strong>Top Level Domain:</strong>
											{el.tld?.map((el) => (
												<span>{el}</span>
											))}
										</span>
									</li>
									<li className='info__right-item'>
										<span className='info__right-span'>
											<strong>Currencies: </strong>
											{el.currencies[Object?.keys(el.currencies)]?.symbol}
										</span>
									</li>
									<li className='info__right-item'>
										<span className='info__right-span'>
											<strong>Languages:</strong>
											{el.languages[Object?.keys(el.languages)[0]]}
										</span>
									</li>
								</ul>
							</div>
							<div className='info__bottom'>
								<span className='info__bottom-span'>Border Countries: </span>
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
				<h1 className='error'>404 NOT FOUND</h1>
			)}
		</div>
	);
};

export default Info;
