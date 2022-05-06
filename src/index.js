import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from 'components/App';

import 'styles/index.css';

const root = createRoot(document.getElementById('root'));

root.render(
	<StrictMode>
		<Suspense fallback="Loading...">
			<App />
		</Suspense>
	</StrictMode>
);
