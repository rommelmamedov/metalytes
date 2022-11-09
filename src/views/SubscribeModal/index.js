import Modal from 'react-modal';
import React from 'react';

import { EnterEmail } from './EnterEmail';
import { ThankYou } from './ThankYou';
import './style.css';

Modal.setAppElement('#root');

export const SubscribeModal = () => {
	const [modalIsOpen, setIsOpen] = React.useState(true);
	const [currentStep, setCurrentStep] = React.useState(1);

	function closeModal() {
		setIsOpen(false);
	}

	function handleEnterEmailCompleted(_email) {
		setCurrentStep(2);
	}

	return (
		<Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal" className="Modal">
			<div className="modal-header">
				<button className="close-button" onClick={closeModal}>
					close
				</button>
			</div>
			<div className="modal-content">
				{currentStep === 1 && <EnterEmail onCompleted={handleEnterEmailCompleted} />}
				{currentStep === 2 && <ThankYou />}
			</div>
		</Modal>
	);
};
