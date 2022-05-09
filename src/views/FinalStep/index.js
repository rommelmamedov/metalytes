import { Alert } from 'components/Alert';
import { StepHeading } from 'components/StepHeading';
import { SubmitButton } from 'components/SubmitButton';
import { StepDescription } from 'components/StepDescription';

import './style.css';

export const FinalStep = () => (
	<section className="final-step">
		<StepHeading text="Thank You For Purchasing Your Metalyte." />
		<StepDescription text="Please wait a couple of minutes for the comfirmations on the blockchain. This can take anywhere from 1-15 minutes." />
		<Alert type="success" title="Payment Successful" description="Thank you for your support by purchasing land. You can now view it on opensea." />
		{/* <Alert type="warning" title="Error" description="Your signing failed. Please go back to the start and try again." /> */}
		<span className="wallet-number-confirmation">CONFIRMATION: 0xB10975FF2aC535B2516816B480456bf48B0AFB6A </span>
		<div className="final-step-buttons">
			<SubmitButton text="Go Home" variant="secondary" />
			<SubmitButton text="Opensea" />
		</div>
	</section>
);
