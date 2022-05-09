import { useState, useCallback } from 'react';

import { StepHeading } from 'components/StepHeading';
import { SubmitButton } from 'components/SubmitButton';
import { StepDescription } from 'components/StepDescription';
import { CustomInputNumber } from 'components/CustomInputNumber';

import './style.css';

export const SelectQuantity = ({ setCurrentStep }) => {
	const [quantity, setQuantity] = useState(1);
	const handleIncrementButtonClick = useCallback(() => {
		setQuantity(quantity => quantity + 1);
	}, [setQuantity]);

	const handleDecrementButtonClick = useCallback(() => {
		setQuantity(quantity => quantity - 1);
	}, [setQuantity]);

	const handleSubmitButtonClick = useCallback(() => {
		console.log('Mint');
		setCurrentStep(currentStep => currentStep + 1);
	}, [setCurrentStep]);

	return (
		<section className="select-quantity">
			<StepHeading text="Please select land quantity" />
			<StepDescription text="Please select how many pieces of land you want to go to the next step in our minting process. You can change the input." />
			<label htmlFor="quantity">Quantity</label>
			<div className="quantity">
				<div className="quantity-form">
					<CustomInputNumber value={quantity} onIncrementButtonClick={handleIncrementButtonClick} onDecrementButtonClick={handleDecrementButtonClick} />
					<SubmitButton text="Mint Now" onClick={handleSubmitButtonClick} />
				</div>
				<div className="quantity-price">
					<em>Price</em>
					<strong>1 ETH</strong>
					<small>$3,031.18 USD</small>
				</div>
			</div>
		</section>
	);
};
