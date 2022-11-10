import { useCallback } from 'react';
import './style.css';

export const SubscribeTextField = ({ value, onConfirm, onChange }) => {
	const handleKeyDown = useCallback(
		event => {
			if (event.key === 'Enter') {
				event.preventDefault();
				if (typeof onConfirm === 'function') {
					onConfirm({});
				}
			}
		},
		[onConfirm]
	);

	return (
		<div className="subscribe-textfield">
			<input id="email" className="email-input" type="email" value={value} placeholder="email@example.com" onChange={onChange} onKeyDown={handleKeyDown} />
			<button className="subscribe-button" onClick={onConfirm}>
				Subscribe
			</button>
		</div>
	);
};
