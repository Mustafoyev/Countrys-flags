import './assets/styles/index.css';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Card from './components/Card/Card';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Info from './components/pages/Info.jsx';
import Error from './components/Error/Error';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useContext } from 'react';
import { ThemeContext } from './components/context/ThemeContext';
import { language } from './components/language/Language.jsx';

const App = () => {
	const { theme } = useContext(ThemeContext);
	const [arr, setArr] = useState([]);
	const [value, setValue] = useState('');
	const [selval, setSelval] = useState('');

	i18n.use(initReactI18next).init({
		fallbackLng: window.localStorage.getItem('lang'),
		interpolation: {
			escapeValue: false,
		},
		resources: {
			en: { translation: language.en },
			uz: { translation: language.uz },
		},
	});

	useEffect(() => {
		if (value.length) {
			fetch(`https://restcountries.com/v3.1/name/${value}`)
				.then((res) => res.json())
				.then((data) => setArr(data));
		} else if (selval.length) {
			if (selval === 'All') {
				fetch(`https://restcountries.com/v3.1/all`)
					.then((res) => res.json())
					.then((data) => setArr(data));
			} else {
				fetch(`https://restcountries.com/v3.1/region/${selval}`)
					.then((res) => res.json())
					.then((data) => setArr(data));
			}
		} else {
			fetch(`https://restcountries.com/v3.1/all`)
				.then((res) => res.json())
				.then((data) => setArr(data));
		}
	}, [value, selval]);

	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Search getValue={setValue} getSelVal={setSelval} />
								<section
									className={`${theme === 'dark' ? 'card-dark' : 'card'}`}>
									<div className='container'>
										<div className='card__inner'>
											<ul className='card__list'>
												{arr.map((item) => (
													<Card obj={item} />
												))}
											</ul>
										</div>
									</div>
								</section>
							</>
						}
					/>
					<Route
						path='/:name'
						element={
							<section className={`${theme === 'dark' ? 'info-dark' : 'info'}`}>
								<div className='container'>
									<div className='info__inner'>
										<Info />
									</div>
								</div>
							</section>
						}
					/>
					<Route path='*' element={<Error />} />
				</Routes>
			</main>
		</>
	);
};

export default App;
