import { useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { ColorRing } from 'react-loader-spinner';

import { SubmitButton } from 'components/SubmitButton';
import './style.css';

export const FinalView = ({ email, walletAddress, onCompleted }) => {
	const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

	var mailchimpSubscribe = null;
	var didSubscribe = false;

	useEffect(() => {
		if (didSubscribe === false) {
			mailchimpSubscribe({ EMAIL: email, MERGE1: walletAddress });
			didSubscribe = true;
		}
	}, [email, walletAddress]);

	return (
		<MailchimpSubscribe
			url={postUrl}
			render={({ subscribe, status, message }) => {
				if (mailchimpSubscribe == null) {
					mailchimpSubscribe = subscribe;
				}
				return (
					<div className="final-view">
						{status === 'sending' && (
							<div>
								<ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={['#69F08F', '#69F08F', '#69F08F', '#69F08F', '#69F08F']} />
							</div>
						)}
						{status === 'success' && (
							<div className="success-view">
								<h1 className="header"> Thank&#160;you for subscribing&#160;! </h1>
								<SubmitButton text="Go back to the main page" onClick={onCompleted} />
							</div>
						)}
						{status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />}
					</div>
				);
			}}
		/>
	);
};
