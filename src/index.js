import { RecoilRoot } from 'recoil';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import { App } from 'components/App';

import 'fonts.css';
import 'index.css';

const getLibrary = provider => {
	const library = new Web3Provider(provider, 'any');
	library.pollingInterval = 15000;

	return library;
};

const root = createRoot(document.getElementById('root'));

root.render(
	<StrictMode>
		<Suspense fallback="Loading...">
			<Web3ReactProvider getLibrary={getLibrary}>
				<RecoilRoot>
					<App />
				</RecoilRoot>
			</Web3ReactProvider>
		</Suspense>
	</StrictMode>
);
