import { useState, useCallback } from 'react';

import { StepperNav } from 'components/StepperNav';
import { StepperBody } from 'components/StepperBody';
import { StepperHeader } from 'components/StepperHeader';

import poster from 'assets/poster.jpg';
import mp4 from 'assets/videos/bg.mp4';
import webm from 'assets/videos/bg.webm';

export const App = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const handleBackButtonClick = useCallback(() => {
		console.log('Back');
		setCurrentStep(currentStep => currentStep - 1);
	}, []);

	return (
		<>
			<div className="left">
				<div className="stepper">
					{currentStep !== 1 && <StepperHeader onBackButtonClick={handleBackButtonClick} />}
					<StepperNav currentStep={currentStep} />
					<StepperBody currentStep={currentStep} setCurrentStep={setCurrentStep} />
				</div>
			</div>
			<div className="right">
				<video className="video" autoPlay loop muted poster={poster}>
					<source src={webm} type="video/webm" />
					<source src={mp4} type="video/mp4" />
				</video>
			</div>
			{/* <div className="background" /> */}
		</>
	);
};
