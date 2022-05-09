import './style.css';

export const SubmitButton = ({ text, variant, onClick }) => (
	<button className="submit-button" onClick={onClick} data-variant={variant}>
		{text}
	</button>
);
