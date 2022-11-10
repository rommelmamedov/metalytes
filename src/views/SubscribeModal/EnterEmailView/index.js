import { useState, useCallback } from 'react';
import { SubscribeTextField } from 'components/SubscribeTextField';
import './style.css';

export const EnterEmailView = ({ onCompleted }) => {
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');

	const emailValidation = () => {
		const regex = /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;
		if (!email || regex.test(email) === false) {
			setEmailError('email is not valid');
			return false;
		}
		setEmailError('');
		return true;
	};

	const handleTextfieldConfirm = useCallback(
		event => {
			if (emailValidation()) {
				onCompleted(email);
			}
		},
		[email, onCompleted]
	);

	const handleTextfieldChange = useCallback(
		event => {
			setEmail(event.target.value);
			if (emailError !== '') {
				setEmailError('');
			}
		},
		[setEmail, emailError]
	);

	return (
		<div className="enter-email-view">
			<div>
				<h1 className="header"> Subscribe for updates </h1>
				<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
			<div className="textfield-box">
				<SubscribeTextField className="subscribe-textfield" value={email} onConfirm={handleTextfieldConfirm} onChange={handleTextfieldChange} />
				<p className="email-error">{emailError}</p>
			</div>
		</div>
	);
};
