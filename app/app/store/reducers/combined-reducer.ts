import { State } from '../store';
import { updateFont, UpdateFontAction } from './font-reducer';

export function combinedReducer(state: State, action: any) {
	return {
		...updateFont(state, action as UpdateFontAction),
	};
}
