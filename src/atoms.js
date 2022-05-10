import { atom } from 'recoil';

const localStorageEffect =
	key =>
	({ setSelf, onSet }) => {
		const savedValue = localStorage.getItem(key);
		if (savedValue != null) {
			setSelf(JSON.parse(savedValue));
		}

		onSet((newValue, _, isReset) => {
			isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
		});
	};

export const connectorAtom = atom({ key: 'connector', default: null });
export const currentStepAtom = atom({ key: 'currentStep', default: 1, effects: [localStorageEffect('currentStep')] });
export const accountNumberAtom = atom({ key: 'accountNumber', default: null, effects: [localStorageEffect('accountNumber')] });
export const isAccountActiveAtom = atom({ key: 'isAccountActive', default: false, effects: [localStorageEffect('isAccountActive')] });
