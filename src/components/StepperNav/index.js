import './style.css';

export const StepperNav = () => (
	<nav className="stepper-nav">
		<ul>
			<li className="active" data-number="01">
				Connect <br /> Wallet
			</li>
			<li data-number="02">
				Select <br /> Quantity
			</li>
			<li data-number="03">
				Mint <br /> Metalytes
			</li>
		</ul>
	</nav>
);
