import { StepHeading } from 'components/StepHeading';
import { StepDescription } from 'components/StepDescription';
import { ConnectionButton } from 'components/ConnectionButton';

import metamaskIcon from 'assets/images/metamask.svg';
import coinbaseIcon from 'assets/images/coinbase.svg';
import walletConnectIcon from 'assets/images/wallet-connect.svg';

const connectionOptions = [
	{
		title: 'Metamask',
		icon: metamaskIcon,
		handleClick: () => console.log(''),
	},
	{
		title: 'Coinbase',
		icon: coinbaseIcon,
		handleClick: () => console.log(''),
	},
	{
		title: 'Wallet Connect',
		icon: walletConnectIcon,
		handleClick: () => console.log(''),
	},
];

export const ConnectWallet = () => (
	<section className="connect-wallet">
		<StepHeading text="Please connect your wallet" />
		<StepDescription text="Please connect your wallet to go to the next step in our minting process. MAKE SURE YOU HAVE ETH IN YOUR WALLET!!!" />
		<div className="connection-options">
			{connectionOptions.map(({ title, icon, handleClick }, index) => (
				<ConnectionButton icon={icon} title={title} key={index} onClick={handleClick} />
			))}
		</div>
	</section>
);
