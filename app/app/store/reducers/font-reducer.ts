import { Font } from '../../pages/main/font-creation/create/Create';
import { State } from '../Store';
import { AsyncStorage } from 'react-native';

export interface UpdateFontAction {
	type: 'UPDATE_LETTER' | 'DELETE_LETTER' | 'UPDATE_FONT';
	payload: {
		letter: string;
		pointType?: string;
		x?: string;
		y?: string;
		rawFont: Font;
	};
}

export function updateFont(
	state: State,
	action: UpdateFontAction
): State {
	switch (action.type) {
		case 'UPDATE_FONT':
			console.log(state);
			if (action.payload.rawFont) {
				return { ...state, rawFont: action.payload.rawFont };
			}
			return {
				...state,
			};
		case 'DELETE_LETTER':
			return {
				...state,
				rawFont: {
					...state.rawFont,
					[action.payload.letter]: '',
				},
			};
		case 'UPDATE_LETTER':
			return {
				...state,
				charactersDrawn: !state.charactersDrawn.includes(action.payload.letter)
					? [...state.charactersDrawn, action.payload.letter]
					: state.charactersDrawn,
				rawFont: {
					...state.rawFont,
					[action.payload.letter]: `${state.rawFont[action.payload.letter] ?? ''}${
						action.payload.pointType
					}${action.payload.x},${action.payload.y} `,
				},
			};
	}
}
