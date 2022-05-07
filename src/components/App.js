import { StepperNav } from 'components/StepperNav';
import { StepperBody } from 'components/StepperBody';

import poster from 'assets/poster.jpg';
import mp4 from 'assets/videos/bg.mp4';
import webm from 'assets/videos/bg.webm';

export const App = () => (
	<div className="app">
		<div className="stepper">
			<StepperNav />
			<StepperBody />
		</div>
		<video className="video" autoPlay loop muted poster={poster}>
			<source src={webm} type="video/webm" />
			<source src={mp4} type="video/mp4" />
		</video>
		{/* <div className="background" /> */}
	</div>
);
