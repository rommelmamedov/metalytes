import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const RPC_URLS = {
	1: 'https://mainnet.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4',
	4: 'https://rinkeby.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4',
};

export const metamask = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });
export const coinbase = new WalletLinkConnector({ url: RPC_URLS[4], appName: 'metalytes', supportedChainIds: [1, 4] });
export const walletConnect = new WalletConnectConnector({
	rpc: { 4: RPC_URLS[4], 1: RPC_URLS[1] },
	qrcode: true,
	pollingInterval: 15000,
});

export const resetWalletConnector = connector => {
	if (connector && connector instanceof WalletConnectConnector) {
		connector.walletConnectProvider = undefined;
	}
};

export const activateInjectedProvider = providerName => {
	const { ethereum } = window;

	if (!ethereum?.providers) {
		return undefined;
	}

	let provider;
	switch (providerName) {
		case 'coinbase':
			provider = ethereum.providers.find(({ isCoinbaseWallet }) => isCoinbaseWallet);
			break;
		case 'metamask':
			provider = ethereum.providers.find(({ isMetaMask }) => isMetaMask);
			break;
		default:
			return undefined;
	}

	if (provider) {
		ethereum.setSelectedProvider(provider);
	}
};
