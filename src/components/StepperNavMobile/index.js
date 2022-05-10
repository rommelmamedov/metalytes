import { useRecoilValue } from 'recoil';

import { currentStepAtom } from 'atoms';
import './style.css';

export const StepperNavMobile = () => {
	const currentStep = useRecoilValue(currentStepAtom);

	return (
		<nav className="stepper-mobile-nav">
			<ul>
				{[1, 2, 3, 4].map((item, index) => (
					<li className={currentStep === index + 1 ? 'active' : ''} />
				))}
			</ul>
		</nav>
	);
};
