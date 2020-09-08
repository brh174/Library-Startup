import React from 'react';
import handHolding from './handHolding.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './TabThreeContent.css';
import 'tachyons';

const TabThreeContent = ({onCallToAction}) => {
  return (
      <div className='tab3-content-box'>
        <div className='tab3-content-left'>
         <h1>Free forever. Always.</h1>
          <p>We think knowledge should be free for everyone, even if you don't donate.</p>
            <a className='btn btn-lg' onClick={() => onCallToAction()}>Enjoy now
            <FontAwesomeIcon icon={faChevronRight} size='1x' style={{marginLeft: '1rem'}} />
          </a>
        </div>
      <div className='tab3-content-right'>
       
      </div>
    </div>
  )
}

export default TabThreeContent;