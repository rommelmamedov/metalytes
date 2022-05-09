import './style.css';

export const Alert = ({ type, title, description }) => (
	<div className="alert" data-type={type}>
		<div className="alert-icon">
			<svg width={70} height={70} xmlns="http://www.w3.org/2000/svg">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M28.378 11.645c3.185-4.66 10.059-4.66 13.244 0l1.26 1.844a221.509 221.509 0 0 1 20.252 36.643l.263.605c1.966 4.52-1.004 9.653-5.903 10.2a202.514 202.514 0 0 1-44.989 0c-4.898-.547-7.868-5.68-5.902-10.2l.263-.605a221.508 221.508 0 0 1 20.252-36.643l1.26-1.844Zm9.539 14.605a2.917 2.917 0 1 1-5.834 0 2.917 2.917 0 0 1 5.834 0ZM35 34.27c1.208 0 2.188.98 2.188 2.188v14.584a2.188 2.188 0 0 1-4.376 0V36.458c0-1.208.98-2.187 2.188-2.187Z"
				/>
			</svg>
		</div>
		<div className="alert-content">
			<strong>{title}</strong>
			<p>{description}</p>
		</div>
	</div>
);
