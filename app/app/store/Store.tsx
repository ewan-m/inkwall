import React, {
	createContext,
	useContext,
	useReducer,
	FunctionComponent,
	Reducer,
	Dispatch,
} from 'react';
import { Font } from '../pages/main/font-creation/create/Create';

export interface State {
	rawFont: Font;
	charactersDrawn: string[];
	processedBase64Font: string;
}

export const StateContext = createContext<[State, Dispatch<any>]>([
	{} as any,
	() => null,
]);

interface StateProviderProps {
	reducer: Reducer<State, any>;
	initialState: State;
}

export const StateProvider: FunctionComponent<StateProviderProps> = ({
	reducer,
	initialState,
	children,
}) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
