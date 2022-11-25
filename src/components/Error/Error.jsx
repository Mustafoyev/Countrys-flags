import { useNavigate } from 'react-router-dom';
import ErrorImg from '../../assets/images/error.webp';
import './error.css';

const Error = () => {
	const navigate = useNavigate();
	return (
		<section className='error-section'>
			<div className='container'>
				<div className='error-section__inner'>
					<button onClick={() => navigate(-1)} className='info__link'>
						Back
					</button>
					<img className='error-img' src={ErrorImg} alt='error img' />
				</div>
			</div>
		</section>
	);
};

export default Error;
