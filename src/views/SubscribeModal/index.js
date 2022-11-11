import ReactModal from 'react-modal';
import { useState, useCallback } from 'react';

import xmarkIcon from 'assets/images/xmark.svg';
import { EnterEmailView } from './EnterEmailView';
import { ConnectWalletView } from './ConnectWalletView';
import { FinalView } from './FinalView';
import './style.css';

ReactModal.setAppElement('#root');

export const SubscribeModal = () => {
	const [modalIsOpen, setIsOpen] = useState(true);
	const [currentStep, setCurrentStep] = useState(1);

	const [email, setEmail] = useState('');
	const [walletAddress, setWalletAddress] = useState('');

	const closeModal = useCallback(() => {
		setIsOpen(false);
	}, [setIsOpen]);

	const handleEnterEmailCompleted = useCallback(
		_email => {
			setEmail(_email);
			setCurrentStep(2);
		},
		[setEmail, setCurrentStep]
	);

	const handleConnectWalletCompleted = useCallback(
		_walletAddress => {
			setWalletAddress(_walletAddress);
			setCurrentStep(3);
		},
		[setWalletAddress, setCurrentStep]
	);

	return (
		<ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} className="subscribe-modal" overlayClassName="subscribe-modal-overlay">
			<button className="close-button" onClick={closeModal}>
				<img src={xmarkIcon} alt={'close-icon'} />
			</button>
			<div className="content">
				{currentStep === 1 && <EnterEmailView onCompleted={handleEnterEmailCompleted} />}
				{currentStep === 2 && <ConnectWalletView onCompleted={handleConnectWalletCompleted} />}
				{currentStep === 3 && <FinalView email={email} walletAddress={walletAddress} onCompleted={closeModal} />}
			</div>
		</ReactModal>
	);
};
