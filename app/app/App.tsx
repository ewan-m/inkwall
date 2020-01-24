import React, { createContext } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MainContent } from './pages/main/MainContent';
import { Welcome } from './pages/welcome/Welcome';
import { StateProvider } from './store/Store';
import { combinedReducer } from './store/reducers/combined-reducer';

const MainNavigator = createStackNavigator(
	{
		Welcome: Welcome,
		MainContent: MainContent,
	},
	{ initialRouteName: 'Welcome', headerMode: 'none' }
);

const Navigation = createAppContainer(MainNavigator);

const App = () => (
	<StateProvider
		initialState={{
			rawFont: {},
			charactersDrawn: [],
			processedBase64Font: '',
		}}
		reducer={combinedReducer}
	>
		<Navigation />
	</StateProvider>
);

export default App;
