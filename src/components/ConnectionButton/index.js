import './style.css';

export const ConnectionButton = ({ title, icon, onClick }) => (
	<button className="connection-button" onClick={onClick}>
		<img src={icon} alt={title} />
		<div className="title-wrapper">
			<span>Connect Using</span>
			<strong>{title}</strong>
		</div>
	</button>
);
