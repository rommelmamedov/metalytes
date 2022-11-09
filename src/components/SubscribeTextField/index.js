import './style.css';

export const SubscribeTextField = ({ value, onClick, onChange }) => {
	const handleKeyDown = event => {
		if (event.key === 'Enter') {
			event.preventDefault();
			if (typeof onClick === 'function') {
				onClick({});
			}
		}
	};

	return (
		<div className="box">
			<input id="email" className="email-input" type="email" value={value} placeholder="email@example.com" onChange={onChange} onKeyDown={handleKeyDown} />
			<button className="subscribe-button" onClick={onClick}>
				Subscribe
			</button>
		</div>
	);
};
