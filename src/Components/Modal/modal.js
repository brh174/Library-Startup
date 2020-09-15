import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './modal.css';

const Modal = ({isModalOpen, handleCloseBtnClick, onSubmitSignUp, onFirstNameChange, onLastNameChange, onEmailChange}) => {

	return (
		<div className={(isModalOpen === true) ? 'modal' : 'modal no-dis'}>
			<div className='modal-content' >
				<span className='close-btn' onClick={() => handleCloseBtnClick()} >&times;</span>
				<div className='signin-container'>
					<h1>Sign up</h1>
				</div>
				<div className='input-container'>
					<div className='first-line-container'>
						<div className = 'textbox first-name'>
							<FontAwesomeIcon className='icon' icon={faUser} size='2x' />
							<input type='name' placeholder='First Name' onChange={onFirstNameChange} name='' />
						</div>
						<div className = 'textbox last-name'>
							<input type='name' placeholder='Last Name' onChange={onLastNameChange} name=''/>
						</div>
					</div>
					<div className = 'textbox'>
						<FontAwesomeIcon className='icon' icon={faEnvelope} size='2x' />
						<input type='email' placeholder='Email Address' onChange={onEmailChange} name='' />
					</div>
				</div>
				<div className='btn-container'>
					<button onClick={onSubmitSignUp} className='submit-btn btn' type='button'>Submit</button>
				</div>
			</div>
		</div>
	)
}

export default Modal;