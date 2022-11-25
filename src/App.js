import './assets/styles/index.css';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Card from './components/Card/Card';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Info from './components/Pages/Info';
import Error from './components/Error/Error';

const App = () => {
	const [arr, setArr] = useState([]);
	const [value, setValue] = useState('');
	const [selval, setSelval] = useState('');
	const navigate = useNavigate();

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
								<section className='card'>
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
							<section className='info'>
								<div className='container'>
									<div className='info__inner'>
										<button onClick={() => navigate(-1)} className='info__link'>
											Back
										</button>
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
