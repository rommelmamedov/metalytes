import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import './style.css';

export const ThankYou = ({ email, walletAddress }) => {
	const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

	const handleSubmit = (event, onSubmitted) => {
		event.preventDefault();
		console.log('handleSubmit with email: ' + email);
		onSubmitted({ EMAIL: email, MERGE1: walletAddress });
	};

	return (
		<MailchimpSubscribe
			url={postUrl}
			render={({ subscribe, status, message }) => (
				<div>
					{/* <CustomForm onSubmitted={formData => subscribe(formData)} /> */}
					{status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
					{status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />}
					{status === 'success' && <div style={{ color: 'green' }}>Subscribed !</div>}
					<button
						onClick={event => {
							handleSubmit(event, subscribe);
						}}
					>
						Submit
					</button>
				</div>
			)}
		/>
		// <div className="thank-you">
		// 	<h1 className="heading"> Thank you for subscribing ! </h1>

		// </div>
	);
};
