import React from 'react';
import books from './books.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../Fonts/The Blacklist.ttf';
import './showcase.css';

const Showcase = ({onCallToAction, isModalOpen}) => {
	return (
		<header className='showcase'>
			<div className='showcase-top'>
					<h2 className='logo'>Better Bindings</h2>
			</div>
			<div className='showcase-content'>
				<h1>A free, open-source library.</h1>
				<p>Read anywhere. For free. Forever.</p>
				<a className='btn btn-xl' onClick={() => onCallToAction()}>
				Start your journey
				<FontAwesomeIcon icon={faChevronRight} size='1x' style={{marginLeft: '1rem'}} />
				</a>
			</div>
		</header>
	)
}

export default Showcase;