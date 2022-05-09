import './style.css';

export const SubmitButton = ({ text, onClick }) => (
	<button className="submit-button" onClick={onClick}>
		{text}
	</button>
);
