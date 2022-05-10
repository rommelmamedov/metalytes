import { useSetRecoilState } from 'recoil';
import { useCallback, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';

import { StepHeading } from 'components/StepHeading';
import { StepDescription } from 'components/StepDescription';
import { ConnectionButton } from 'components/ConnectionButton';

import { currentStepAtom, accountNumberAtom, isAccountActiveAtom } from 'atoms';
import { metamask, walletConnect, coinbase, resetWalletConnector, activateInjectedProvider } from 'connectors';
import metamaskIcon from 'assets/images/metamask.svg';
import coinbaseIcon from 'assets/images/coinbase.svg';
import walletConnectIcon from 'assets/images/wallet-connect.svg';

export const ConnectWallet = () => {
	const setCurrentStep = useSetRecoilState(currentStepAtom);
	const setAccountNumber = useSetRecoilState(accountNumberAtom);
	const setIsAccountActive = useSetRecoilState(isAccountActiveAtom);
	const {
		active,
		account,
		activate,
		// deactivate
	} = useWeb3React();

	useEffect(() => {
		if (active && account) {
			setIsAccountActive(true);
			setAccountNumber(account);
			setCurrentStep(currentStep => currentStep + 1);
		}
	}, [active, account, setCurrentStep, setIsAccountActive, setAccountNumber]);

	const handleMetamaskClick = useCallback(async () => {
		try {
			activateInjectedProvider('metamask');
			await activate(metamask);
		} catch (error) {
			console.error(error);
		}
	}, [activate]);

	const handleCoinbaseClick = useCallback(async () => {
		try {
			activateInjectedProvider('coinbase');
			await activate(coinbase);
		} catch (error) {
			console.error(error);
		}
	}, [activate]);

	const handleWalletConnectClick = useCallback(async () => {
		try {
			resetWalletConnector(walletConnect);
			await activate(walletConnect);
		} catch (error) {
			console.error(error);
		}
	}, [activate]);

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
