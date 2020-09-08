import React from 'react';
import yellowedBook from './yellowedBook.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './TabOneContent.css';
import 'tachyons';

const TabOneContent = ({onCallToAction, isModalOpen}) => {
  return (
  	<div className='content-box'>
  		<div className='content-left'>
	  		<h1>Sourced and curated solely by the users.</h1>
	  		<p>This digital library is sourced and curated entirely by the people who use it. By becoming a curator, you are helping
	  		to build a digital library that gives the gift of knowledge for free.</p>
	  		<a className='btn btn-lg' onClick={() => onCallToAction()} >Become a curator
				  <FontAwesomeIcon icon={faChevronRight} size='1x' style={{marginLeft: '1rem'}} />
	  		</a>
  		</div>
  		<div className='content-right'>
  			
  		</div>
  	</div>
  )
}

export default TabOneContent;