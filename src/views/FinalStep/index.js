import { useRecoilValue } from 'recoil';

import { Alert } from 'components/Alert';
import { StepHeading } from 'components/StepHeading';
import { SubmitButton } from 'components/SubmitButton';
import { StepDescription } from 'components/StepDescription';

import { accountNumberAtom } from 'atoms';
import './style.css';

const handleGoHomeButtonClick = () => window.open('https://metalytes.com', '_blank').focus();

export const FinalStep = () => {
	const accountNumber = useRecoilValue(accountNumberAtom);

	return (
		<section className="final-step">
			<StepHeading text="Thank You For Purchasing Your Metalyte." />
			<StepDescription text="Please wait a couple of minutes for the confirmations on the blockchain. This can take anywhere from 1-15 minutes." />
			<Alert type="success" title="Payment Successful" description="Thank you for your support by purchasing land. You can now view it on opensea." />
			{/* <Alert type="warning" title="Error" description="Your signing failed. Please go back to the start and try again." /> */}
			<span className="wallet-number-confirmation">
				CONFIRMATION: {accountNumber}
				{/* TODO: This should be receiver account name */}
			</span>
			<div className="final-step-buttons">
				<SubmitButton text="Go Home" variant="secondary" onClick={handleGoHomeButtonClick} />
				<SubmitButton text="Opensea" />
			</div>
		</section>
	);
};
