import { useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { LoaderSpinner } from 'components/LoaderSpinner';
import { SubmitButton } from 'components/SubmitButton';
import './style.css';

const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
let mailchimpSubscribe = null;
let didSubscribe = false;

export const FinalView = ({ email, walletAddress, onCompleted }) => {
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
								<LoaderSpinner />
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
