import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Card from './components/Card/Card';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Search />
				<section className='card'>
					<div className='container'>
						<div className='card__inner'>
							<ul className='card__list'>
								<Card />
								<Card />
								<Card />
								<Card />
								<Card />
								<Card />
								<Card />
								<Card />
							</ul>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default App;
