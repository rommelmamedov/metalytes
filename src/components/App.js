import { StepperNav } from 'components/StepperNav';
import { StepperBody } from 'components/StepperBody';

export const App = () => (
	<main className="app">
		<div className="stepper">
			<StepperNav />
			<StepperBody />
		</div>
		<div className="background" />
	</main>
);
