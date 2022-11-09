import { useState, useCallback } from 'react';

import { StepHeading } from 'components/StepHeading';
import { StepDescription } from 'components/StepDescription';
import { SubscribeTextField } from 'components/SubscribeTextField';
import './style.css';

export const EnterEmail = ({ onCompleted }) => {
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

	const handleClick = event => {
		console.log('onClick :' + email);
		console.log(emailValidation());
		if (emailValidation()) {
			onCompleted(email);
		}
	};

	const handleChange = useCallback(
		event => {
			setEmail(event.target.value);
		},
		[setEmail]
	);

	return (
		<div className="enter-email">
			<div>
				<StepHeading className="heading" text="Subscribe for updates" />
				<StepDescription
					className="description"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				/>
			</div>
			<div className="textfield-box">
				<SubscribeTextField className="subscribe-textfield" value={email} onClick={handleClick} onChange={handleChange} />
				<span>{emailError}</span>
			</div>
		</div>
	);
};
