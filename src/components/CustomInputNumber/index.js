import './style.css';

export const CustomInputNumber = ({ value, onDecrementButtonClick, onIncrementButtonClick }) => (
	<div className="custom-number-input">
		<button className="decrement" onClick={onDecrementButtonClick}>
			-
		</button>
		<input id="quantity" type="number" value={value} readOnly disabled />
		<button className="increment" onClick={onIncrementButtonClick}>
			+
		</button>
	</div>
);
