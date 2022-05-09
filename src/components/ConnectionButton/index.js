import './style.css';

export const ConnectionButton = ({ title, icon, handleClick }) => (
	<button className="connection-button" onClick={handleClick}>
		<img src={icon} alt={title} />
		<div className="title-wrapper">
			<span>Connect Using</span>
			<strong>{title}</strong>
		</div>
	</button>
);
