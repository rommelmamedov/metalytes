import { useCallback, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { metamask, walletConnect, coinbase, resetWalletConnector, activateInjectedProvider } from 'connectors';
import { ConnectionButton } from 'components/ConnectionButton';
import metamaskIcon from 'assets/images/metamask.svg';
import coinbaseIcon from 'assets/images/coinbase.svg';
import walletConnectIcon from 'assets/images/wallet-connect.svg';

import './style.css';

export const ConnectWalletView = ({ onCompleted }) => {
	const { active, account, activate } = useWeb3React();

	useEffect(() => {
		if (account && active) {
			onCompleted(account);
		}
	}, [account, active, onCompleted]);

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
			<h1 className="heading">
				{' '}
				Connect your wallet <br></br> to sign up for later
			</h1>
			<div className="connection-options">
				<ConnectionButton icon={metamaskIcon} title="Metamask" onClick={handleMetamaskClick} />
				<ConnectionButton icon={coinbaseIcon} title="Coinbase" onClick={handleCoinbaseClick} />
				<ConnectionButton icon={walletConnectIcon} title="Wallet Connect" onClick={handleWalletConnectClick} />
			</div>
		</section>
	);
};
