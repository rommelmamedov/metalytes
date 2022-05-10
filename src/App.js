import { useRecoilValue } from 'recoil';

import { FinalStep } from 'views/FinalStep';
import { OrderSummary } from 'views/OrderSummary';
import { ConnectWallet } from 'views/ConnectWallet';
import { SelectQuantity } from 'views/SelectQuantity';
import { StepperNav } from 'components/StepperNav';
import { StepperNavMobile } from 'components/StepperNavMobile';
import { StepperHeader } from 'components/StepperHeader';

import { currentStepAtom } from 'atoms';

import logo from 'assets/logo.png';
import mp4 from 'assets/videos/bg.mp4';
import webm from 'assets/videos/bg.webm';
import poster from 'assets/videos/poster.jpg';

export const App = () => {
	const currentStep = useRecoilValue(currentStepAtom);

	return (
		<>
			<div className="left">
				<div className="stepper">
					<img className="logo" src={logo} alt="Metalytes logo" />
					{currentStep !== 1 && <StepperHeader />}
					<StepperNav />
					<main className="stepper-body">
						{currentStep === 1 && <ConnectWallet />}
						{currentStep === 2 && <SelectQuantity />}
						{currentStep === 3 && <OrderSummary />}
						{currentStep === 4 && <FinalStep />}
					</main>
					<StepperNavMobile />
				</div>
			</div>
			<div className="right">
				<video autoPlay loop muted poster={poster}>
					<source src={webm} type="video/webm" />
					<source src={mp4} type="video/mp4" />
				</video>
			</div>
		</>
	);
};
