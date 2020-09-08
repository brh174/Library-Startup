import React from 'react';
import beachReading from './beachReading.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './TabTwoContent.css';
import 'tachyons';

const TabTwoContent = ({onCallToAction}) => {
  return (
  	  <div className='tab2-content-box'>
  		<div className='tab2-content-left'>
	  	
  		</div>
  		<div className='tab2-content-right'>
  			<h1>Access from anywhere with internet.</h1>
	  		<p>This digital collection in accessible from anywhere in the world with an internet connection. Reading has never been this easy or cheap.</p>
	  		<a className='btn btn-lg' onClick={() => onCallToAction()}>Break free
				<FontAwesomeIcon icon={faChevronRight} size='1x' style={{marginLeft: '1rem'}} />
	  		</a>
  		</div>
  	</div>
  )
}

export default TabTwoContent;