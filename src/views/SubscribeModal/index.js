import ReactModal from 'react-modal';
import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';

import { EnterEmail } from './EnterEmail';
import { ThankYou } from './ThankYou';
import { ConnectWallet } from './ConnectWallet';
import './style.css';

ReactModal.setAppElement('#root');

export const SubscribeModal = () => {
	const [modalIsOpen, setIsOpen] = React.useState(true);
	const [currentStep, setCurrentStep] = React.useState(1);

	const [email, setEmail] = React.useState('jere4@react.ca');
	const [walletAddress, setWalletAddress] = React.useState('0x2000000000000000000000000000000000000000');

	function closeModal() {
		setIsOpen(false);
	}

	function handleEnterEmailCompleted(_email) {
		console.log('handleEnterEmailCompleted, email: ' + _email);
		setEmail(_email);
		setCurrentStep(2);
	}

	function handleConnectWalletCompleted(_walletAddress) {
		console.log('handleConnectWalletCompleted, walletAddress: ' + _walletAddress);
		setWalletAddress(_walletAddress);
		setCurrentStep(3);
	}

	return (
		<ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal" className="subscribe-modal" overlayClassName="subscribe-modal-overlay">
			<button className="close-button" onClick={closeModal}>
				<VscChromeClose className="close-icon" />
			</button>
			<div className="content">
				{currentStep === 1 && <EnterEmail onCompleted={handleEnterEmailCompleted} />}
				{currentStep === 2 && <ConnectWallet onCompleted={handleConnectWalletCompleted} />}
				{currentStep === 3 && <ThankYou email={email} walletAddress={walletAddress} onCompleted={closeModal} />}
			</div>
		</ReactModal>
	);
};
