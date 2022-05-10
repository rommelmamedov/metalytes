import { FinalStep } from 'views/FinalStep';
import { OrderSummary } from 'views/OrderSummary';
import { ConnectWallet } from 'views/ConnectWallet';
import { SelectQuantity } from 'views/SelectQuantity';

export const StepperBody = ({ currentStep }) => (
	<main className="stepper-body">
		{currentStep === 1 && <ConnectWallet />}
		{currentStep === 2 && <SelectQuantity />}
		{currentStep === 3 && <OrderSummary />}
		{currentStep === 4 && <FinalStep />}
	</main>
);
