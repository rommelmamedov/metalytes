import { useRecoilValue } from 'recoil';

import { StepperNav } from 'components/StepperNav';
import { StepperBody } from 'components/StepperBody';
import { StepperHeader } from 'components/StepperHeader';

import { currentStepAtom } from 'atoms';

import poster from 'assets/poster.jpg';
import mp4 from 'assets/videos/bg.mp4';
import webm from 'assets/videos/bg.webm';

export const App = () => {
	const currentStep = useRecoilValue(currentStepAtom);

	return (
		<>
			<div className="left">
				<div className="stepper">
					{currentStep !== 1 && <StepperHeader />}
					<StepperNav />
					<StepperBody currentStep={currentStep} />
				</div>
			</div>
			<div className="right">
				<video className="video" autoPlay loop muted poster={poster}>
					<source src={webm} type="video/webm" />
					<source src={mp4} type="video/mp4" />
				</video>
			</div>
		</>
	);
};
