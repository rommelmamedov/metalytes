import { useCallback } from 'react';

import { StepHeading } from 'components/StepHeading';
import { WalletNumber } from 'components/WalletNumber';
import { SubmitButton } from 'components/SubmitButton';

import './style.css';

export const OrderSummary = ({ setCurrentStep }) => {
	const handleSubmitButtonClick = useCallback(() => {
		console.log('Confirm');
		setCurrentStep(currentStep => currentStep + 1);
	}, [setCurrentStep]);

	return (
		<section className="order-summary">
			<StepHeading
				text={
					<>
						Order <br /> Summary
					</>
				}
			/>
			<div className="wallets">
				<WalletNumber number="0xB10975FF2aC535B2516816B480456bf48B0AFB6A" slicer={10} />
				<WalletNumber number="0xB10975FF2aC535B2516816B480456bf48B0AFB6A" slicer={10} />
			</div>
			<ul className="summary-table">
				<li>
					<em>Quantity</em>
					<strong>02</strong>
				</li>
				<li>
					<em>Mint Price</em> <strong>1.00 ETH</strong>
				</li>
				<li>
					<em>Gas Fee</em> <strong>1.273622 ETH</strong>
				</li>
			</ul>
			<div className="summary-total">
				<em>Total</em> <strong>2.273622 ETH</strong>
			</div>
			<SubmitButton text="Confirm" onClick={handleSubmitButtonClick} />
		</section>
	);
};
