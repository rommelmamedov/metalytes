import { useCallback } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import { accountNumberAtom, currentStepAtom } from 'atoms';
import { WalletNumber } from 'components/WalletNumber';

import './style.css';

export const StepperHeader = () => {
	const accountNumber = useRecoilValue(accountNumberAtom);
	const setCurrentStep = useSetRecoilState(currentStepAtom);
	const handleClick = useCallback(() => {
		setCurrentStep(currentStep => currentStep - 1);
	}, [setCurrentStep]);

	return (
		<header className="stepper-header">
			<button className="back-button" onClick={handleClick}>
				Go Back
			</button>
			<WalletNumber number={accountNumber} isOutlined />
		</header>
	);
};
