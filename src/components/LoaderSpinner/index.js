export const LoaderSpinner = props => (
	<svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="blocks-wrapper" aria-label="blocks-loading" data-testid="color-ring-svg" aria-busy="true" {...props}>
		<defs>
			<mask id="a">
				<circle cx={50} cy={50} r={26} stroke="#fff" strokeLinecap="round" strokeDasharray="122.52211349000194 40.840704496667314" strokeWidth={9} transform="rotate(198.018 50 50)">
					<animateTransform attributeName="transform" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" repeatCount="indefinite" />
				</circle>
			</mask>
		</defs>
		<g mask="url(#a)">
			<path fill="#69F08F" d="M14.5 0h15v100h-15z">
				<animate attributeName="fill" values="#69F08F;#69F08F;#69F08F;#69F08F;#69F08F" keyTimes="0;0.25;0.5;0.75;1" dur="1s" repeatCount="indefinite" begin="-0.8s" />
			</path>
			<path fill="#69F08F" d="M28.5 0h15v100h-15z">
				<animate attributeName="fill" values="#69F08F;#69F08F;#69F08F;#69F08F;#69F08F" keyTimes="0;0.25;0.5;0.75;1" dur="1s" repeatCount="indefinite" begin="-0.6s" />
			</path>
			<path fill="#69F08F" d="M42.5 0h15v100h-15z">
				<animate attributeName="fill" values="#69F08F;#69F08F;#69F08F;#69F08F;#69F08F" keyTimes="0;0.25;0.5;0.75;1" dur="1s" repeatCount="indefinite" begin="-0.4s" />
			</path>
			<path fill="#69F08F" d="M56.5 0h15v100h-15z">
				<animate attributeName="fill" values="#69F08F;#69F08F;#69F08F;#69F08F;#69F08F" keyTimes="0;0.25;0.5;0.75;1" dur="1s" repeatCount="indefinite" begin="-0.2s" />
			</path>
			<path fill="#69F08F" d="M70.5 0h15v100h-15z">
				<animate attributeName="fill" values="#69F08F;#69F08F;#69F08F;#69F08F;#69F08F" keyTimes="0;0.25;0.5;0.75;1" dur="1s" repeatCount="indefinite" begin="0s" />
			</path>
		</g>
	</svg>
);
