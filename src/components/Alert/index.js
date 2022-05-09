import './style.css';

export const Alert = ({ type, title, description }) => (
	<div className="alert" data-type={type}>
		<strong>{title}</strong>
		<p>{description}</p>
	</div>
);
