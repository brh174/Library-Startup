import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers , faTabletAlt, faHandshake } from '@fortawesome/free-solid-svg-icons';
import './tabs.css';
import 'tachyons';

const Tabs = ({selectedTab, handleTabChange}) => {

  return (
  	<section className='tabs'>
	  	<div className='container'>
	  		<div id='tab-1' className={(selectedTab ==='tab-1') ? 'tab-item tab-border' : 'tab-item'} onClick={() => handleTabChange('tab-1')}>
	  			<FontAwesomeIcon icon={faUsers} size='3x' />
	  			<p className='hide-sm'>Crowd sourced</p>
	  		</div>
	  		<div id='tab-2' className={(selectedTab ==='tab-2') ? 'tab-item tab-border' : 'tab-item'} onClick={() => handleTabChange('tab-2')}>
	  			<FontAwesomeIcon icon={faTabletAlt} size='3x'  />
	  			<p className='hide-sm'>Read anywhere</p>
	  		</div>
	  		<div id='tab-3' className={(selectedTab ==='tab-3') ? 'tab-item tab-border' : 'tab-item'} onClick={() => handleTabChange('tab-3')}>
	  			<FontAwesomeIcon icon={faHandshake} size='3x' />
	  			<p className='hide-sm'>Completely free</p>
	  		</div>
	  	</div>
	</section>
  )
}

export default Tabs;