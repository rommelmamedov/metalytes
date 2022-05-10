import './style.css';

export const ConnectionButton = ({ title, icon, onClick, isOutlined }) => (
	<button className="connection-button" onClick={onClick} data-outline={isOutlined}>
		<img src={icon} alt={title} />
		<div className="title-wrapper">
			<span>Connect Using</span>
			<strong>{title}</strong>
		</div>
	</button>
);
