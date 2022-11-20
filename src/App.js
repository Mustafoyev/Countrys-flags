import './assets/styles/index.css';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Card from './components/Card/Card';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
	const [arr, setArr] = useState([]);
	const [value, setValue] = useState('');
	const [selval, setSelval] = useState('');

	useEffect(() => {
		if (value.length) {
			fetch(`https://restcountries.com/v3.1/name/${value}`)
				.then((res) => res.json())
				.then((data) => setArr(data));
		} else if (selval.length) {
			fetch(`https://restcountries.com/v3.1/region/${selval}`)
				.then((res) => res.json())
				.then((data) => setArr(data));
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
			</main>
		</>
	);
};

export default App;
