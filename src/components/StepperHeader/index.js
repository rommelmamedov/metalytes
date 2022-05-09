import { WalletNumber } from 'components/WalletNumber';

import './style.css';

export const StepperHeader = ({ onBackButtonClick }) => (
	<header className="stepper-header">
		<button className="back-button" onClick={onBackButtonClick}>
			Go Back
		</button>
		<WalletNumber number="0xB10975FF2aC535B2516816B480456bf48B0AFB6A" isOutlined />
	</header>
);
