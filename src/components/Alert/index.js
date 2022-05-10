import './style.css';

export const Alert = ({ type, title, description }) => (
	<div className="alert" data-type={type}>
		<div className="alert-icon" />
		<div className="alert-content">
			<strong>{title}</strong>
			<p>{description}</p>
		</div>
	</div>
);
