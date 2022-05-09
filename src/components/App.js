import { useCallback } from 'react';

import { StepperNav } from 'components/StepperNav';
import { StepperBody } from 'components/StepperBody';
import { StepperHeader } from 'components/StepperHeader';

import poster from 'assets/poster.jpg';
import mp4 from 'assets/videos/bg.mp4';
import webm from 'assets/videos/bg.webm';

export const App = () => {
	const handleBackButtonClick = useCallback(() => {
		console.log('Back');
	}, []);

	return (
		<>
			<div className="left">
				<div className="stepper">
					<StepperHeader onBackButtonClick={handleBackButtonClick} />
					<StepperNav />
					<StepperBody />
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
