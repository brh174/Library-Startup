import React from 'react';
import 'tachyons';

const Navigation = ({ handleRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end', zIndex: '2'}}>
        <p
        onClick={() => handleRouteChange('signin')}
        className='f3 link dim black underline pa3 pointer'>Sign Out</p>
      </nav>
    );
  } else {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-start', zIndex: '2', color: '#999'}}>
        <p
        onClick={() => handleRouteChange('signin')}
        className='f3 link dim black underline pa3 pointer'>Sign In</p>
        <p
        onClick={() => handleRouteChange('register')}
        className='f3 link dim black underline pa3 pointer'>Register</p>
      </nav>
    );
  }
}

export default Navigation;