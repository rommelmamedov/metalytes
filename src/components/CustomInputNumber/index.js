import './style.css';

export const CustomInputNumber = ({ value, onChange, onDecrementButtonClick, onIncrementButtonClick }) => (
	<div className="custom-number-input">
		<button className="decrement" onClick={onDecrementButtonClick}>
			-
		</button>
		<input id="quantity" type="text" maxLength="3" value={value} onChange={onChange} />
		<button className="increment" onClick={onIncrementButtonClick}>
			+
		</button>
	</div>
);
