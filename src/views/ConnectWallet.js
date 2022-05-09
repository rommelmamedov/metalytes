import { useCallback } from 'react';

import { StepHeading } from 'components/StepHeading';
import { StepDescription } from 'components/StepDescription';
import { ConnectionButton } from 'components/ConnectionButton';

import metamaskIcon from 'assets/images/metamask.svg';
import coinbaseIcon from 'assets/images/coinbase.svg';
import walletConnectIcon from 'assets/images/wallet-connect.svg';

export const ConnectWallet = ({ setCurrentStep }) => {
	const handleMetamaskClick = useCallback(() => {
		console.log('Metamask');
		setCurrentStep(currentStep => currentStep + 1);
	}, [setCurrentStep]);

	const handleCoinbaseClick = useCallback(() => {
		console.log('Coinbase');
		setCurrentStep(currentStep => currentStep + 1);
	}, [setCurrentStep]);

	const handleWalletConnectClick = useCallback(() => {
		console.log('Wallet Connect');
		setCurrentStep(currentStep => currentStep + 1);
	}, [setCurrentStep]);

	return (
		<section className="connect-wallet">
			<StepHeading text="Please connect your wallet" />
			<StepDescription text="Please connect your wallet to go to the next step in our minting process. MAKE SURE YOU HAVE ETH IN YOUR WALLET!!!" />
			<div className="connection-options">
				<ConnectionButton icon={metamaskIcon} title="Metamask" onClick={handleMetamaskClick} />
				<ConnectionButton icon={coinbaseIcon} title="Coinbase" onClick={handleCoinbaseClick} />
				<ConnectionButton icon={walletConnectIcon} title="Wallet Connect" onClick={handleWalletConnectClick} />
			</div>
		</section>
	);
};
