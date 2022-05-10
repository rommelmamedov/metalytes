import { useRecoilState, useSetRecoilState } from 'recoil';
import { useCallback, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';

import { StepHeading } from 'components/StepHeading';
import { StepDescription } from 'components/StepDescription';
import { ConnectionButton } from 'components/ConnectionButton';

import { currentStepAtom, accountNumberAtom, isAccountActiveAtom, connectorAtom } from 'atoms';
import { metamask, walletConnect, coinbase, resetWalletConnector, activateInjectedProvider } from 'connectors';
import metamaskIcon from 'assets/images/metamask.svg';
import coinbaseIcon from 'assets/images/coinbase.svg';
import walletConnectIcon from 'assets/images/wallet-connect.svg';

export const ConnectWallet = () => {
	const [connector, setConnector] = useRecoilState(connectorAtom);
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
		if (account && active) {
			setAccountNumber(account);
			setIsAccountActive(active);
		}
	}, [account, active, setAccountNumber, setIsAccountActive]);

	const handleMetamaskClick = useCallback(async () => {
		try {
			activateInjectedProvider('metamask');
			await activate(metamask);
			setConnector('metamask');
			setTimeout(() => {
				setCurrentStep(currentStep => currentStep + 1);
			}, 300);
		} catch (error) {
			console.error(error);
		}
	}, [activate, setConnector, setCurrentStep]);

	const handleCoinbaseClick = useCallback(async () => {
		try {
			activateInjectedProvider('coinbase');
			await activate(coinbase);
			setConnector('coinbase');
			setTimeout(() => {
				setCurrentStep(currentStep => currentStep + 1);
			}, 300);
		} catch (error) {
			console.error(error);
		}
	}, [activate, setConnector, setCurrentStep]);

	const handleWalletConnectClick = useCallback(async () => {
		try {
			resetWalletConnector(walletConnect);
			await activate(walletConnect);
			setConnector('walletConnect');
			setTimeout(() => {
				setCurrentStep(currentStep => currentStep + 1);
			}, 300);
		} catch (error) {
			console.error(error);
		}
	}, [activate, setConnector, setCurrentStep]);

	return (
		<section className="connect-wallet">
			<StepHeading text="Please connect your wallet" />
			<StepDescription text="Please connect your wallet to go to the next step in our minting process. MAKE SURE YOU HAVE ETH IN YOUR WALLET!!!" />
			<div className="connection-options">
				<ConnectionButton icon={metamaskIcon} title="Metamask" onClick={handleMetamaskClick} isOutlined={connector === 'metamask'} />
				<ConnectionButton icon={coinbaseIcon} title="Coinbase" onClick={handleCoinbaseClick} isOutlined={connector === 'coinbase'} />
				<ConnectionButton icon={walletConnectIcon} title="Wallet Connect" onClick={handleWalletConnectClick} isOutlined={connector === 'walletConnect'} />
			</div>
		</section>
	);
};
