import './style.css';

export const WalletNumber = ({ number, slicer = 6, isOutlined = false }) => (
	<div className="wallet-number" data-outlined={isOutlined}>
		{'*'.repeat(slicer / 2)}
		{number.slice(-slicer)}
	</div>
);
