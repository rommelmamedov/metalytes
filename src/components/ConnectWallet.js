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
		<h1 className="step-heading">Please connect your wallet</h1>
		<p className="step-description">Please connect your wallet to go to the next step in our minting process. MAKE SURE YOU HAVE ETH IN YOUR WALLET!!!</p>
		<div className="connection-options">
			{connectionOptions.map(({ title, icon, handleClick }, index) => (
				<button className="option-button" key={index} onClick={handleClick}>
					<img src={icon} alt={title} />
					<div className="title-wrapper">
						<span>Connect Using</span>
						<strong>{title}</strong>
					</div>
				</button>
			))}
		</div>
	</section>
);
