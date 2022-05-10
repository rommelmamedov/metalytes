import { useRecoilValue } from 'recoil';

import { currentStepAtom } from 'atoms';
import './style.css';

export const StepperNav = () => {
	const currentStep = useRecoilValue(currentStepAtom);

	return (
		<nav className="stepper-nav">
			<ul>
				<li className={currentStep === 1 ? 'active' : ''} data-number="01">
					Connect <br /> Wallet
				</li>
				<li className={currentStep === 2 ? 'active' : ''} data-number="02">
					Select <br /> Quantity
				</li>
				<li className={currentStep === 3 || currentStep === 4 ? 'active' : ''} data-number="03">
					Mint <br /> Metalytes
				</li>
			</ul>
		</nav>
	);
};
