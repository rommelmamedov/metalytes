import { useState, useCallback } from 'react';

export const SelectQuantity = () => {
	const [quantity, setQuantity] = useState(1);
	const handleIncrementButtonClick = useCallback(() => {
		setQuantity(quantity => quantity + 1);
	}, [setQuantity]);

	const handleDecrementButtonClick = useCallback(() => {
		setQuantity(quantity => quantity - 1);
	}, [setQuantity]);

	return (
		<section className="select-quantity">
			<h1 className="step-heading">Please select land quantity</h1>
			<p className="step-description">Please select how many pieces of land you want to go to the next step in our minting process. You can change the input.</p>
			<div className="quantity">
				<div className="quantity-form">
					<label htmlFor="quantity">Quantity</label>
					<div className="custom-number-input">
						<button className="decrement" onClick={handleDecrementButtonClick}>
							-
						</button>
						<input id="quantity" type="number" value={quantity} readOnly disabled />
						<button className="increment" onClick={handleIncrementButtonClick}>
							+
						</button>
					</div>
					<button>Mint Now</button>
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
