import { FinalStep } from 'views/FinalStep';
import { OrderSummary } from 'views/OrderSummary';
import { ConnectWallet } from 'views/ConnectWallet';
import { SelectQuantity } from 'views/SelectQuantity';

export const StepperBody = () => (
	<main className="stepper-body">
		{/* <ConnectWallet /> */}
		{/* <SelectQuantity /> */}
		{/* <OrderSummary /> */}
		<FinalStep />
	</main>
);
