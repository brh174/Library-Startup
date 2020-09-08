import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './modal.css';

const Modal = ({isModalOpen, handleCloseBtnClick, onNameChange, onEmailChange, onPassChange}) => {
	return (
		<div className={(isModalOpen === true) ? 'modal' : 'modal no-dis'} >
			<div className='modal-content'>
				<span className='close-btn' onClick={() => handleCloseBtnClick()} >&times;</span>
				<div className='signin-container'>
					<h1>Sign up</h1>
				</div>
				<div className='input-container'>
					<div className = 'textbox'>
						<FontAwesomeIcon className='icon' icon={faUser} size='2x' />
						<input type='name' placeholder='Name' onChange={onNameChange} name='' />
					</div>
					<div className = 'textbox'>
						<FontAwesomeIcon className='icon' icon={faEnvelope} size='2x' />
						<input type='email' placeholder='Email Address' onChange={onEmailChange} name=''/>
					</div>
					<div className = 'textbox'>
						<FontAwesomeIcon className='icon' icon={faLock} size='2x' />
						<input type='password' placeholder='Password' onChange={onPassChange} name='' />
					</div>
				</div>
				<div className='btn-container'>
					<button className='submit-btn btn' type='button'>Submit</button>
				</div>
			</div>
		</div>
	)
}

export default Modal;