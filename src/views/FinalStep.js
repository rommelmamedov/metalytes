import { Alert } from 'components/Alert';
import { StepHeading } from 'components/StepHeading';
import { StepDescription } from 'components/StepDescription';

export const FinalStep = () => (
	<section className="final-step">
		<StepHeading text="Thank You For Purchasing Your Metalyte." />
		<StepDescription text="Please wait a couple of minutes for the comfirmations on the blockchain. This can take anywhere from 1-15 minutes." />
		<Alert type="success" title="Payment Successful" description="Thank you for your support by purchasing land. You can now view it on opensea." />
	</section>
);
