import { useSetRecoilState } from 'recoil';
import { useState, useCallback } from 'react';

import { StepHeading } from 'components/StepHeading';
import { SubmitButton } from 'components/SubmitButton';
import { StepDescription } from 'components/StepDescription';
import { CustomInputNumber } from 'components/CustomInputNumber';

import { currentStepAtom } from 'atoms';
import './style.css';

export const SelectQuantity = () => {
	const setCurrentStep = useSetRecoilState(currentStepAtom);
	const [quantity, setQuantity] = useState(1);
	const handleIncrementButtonClick = useCallback(() => {
		setQuantity(quantity => (quantity < 1000 ? Number(quantity) + 1 : quantity));
	}, [setQuantity]);

	const handleDecrementButtonClick = useCallback(() => {
		setQuantity(quantity => (quantity > 1 ? Number(quantity) - 1 : quantity));
	}, [setQuantity]);

	const handleChange = useCallback(
		event => {
			setQuantity(event.target.value.replace(/\D/g, ''));
		},
		[setQuantity]
	);

	const handleSubmitButtonClick = useCallback(() => {
		setCurrentStep(currentStep => currentStep + 1);
	}, [setCurrentStep]);

	return (
		<section className="select-quantity">
			<StepHeading text="Please select land quantity" />
			<StepDescription text="Please select how many pieces of land you want to go to the next step in our minting process. You can change the input." />
			<label htmlFor="quantity">Quantity</label>
			<div className="quantity">
				<div className="quantity-form">
					<CustomInputNumber value={quantity} onChange={handleChange} onIncrementButtonClick={handleIncrementButtonClick} onDecrementButtonClick={handleDecrementButtonClick} />
				</div>
				<div className="quantity-price">
					<em>Price</em>
					<strong>1 ETH</strong>
					<small>$3,031.18 USD</small>
				</div>
			</div>
			<SubmitButton text="Mint Now" onClick={handleSubmitButtonClick} />
		</section>
	);
};
