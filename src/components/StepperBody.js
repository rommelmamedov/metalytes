import { FinalStep } from 'views/FinalStep';
import { OrderSummary } from 'views/OrderSummary';
import { ConnectWallet } from 'views/ConnectWallet';
import { SelectQuantity } from 'views/SelectQuantity';

export const StepperBody = ({ currentStep, setCurrentStep }) => (
	<main className="stepper-body">
		{currentStep === 1 && <ConnectWallet setCurrentStep={setCurrentStep} />}
		{currentStep === 2 && <SelectQuantity setCurrentStep={setCurrentStep} />}
		{currentStep === 3 && <OrderSummary setCurrentStep={setCurrentStep} />}
		{currentStep === 4 && <FinalStep setCurrentStep={setCurrentStep} />}
	</main>
);
