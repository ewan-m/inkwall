import React, { createContext } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MainContent } from './pages/main/MainContent';
import { Welcome } from './pages/welcome/Welcome';
import { StateProvider } from './store/Store';
import { combinedReducer } from './store/reducers/combined-reducer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const MainNavigator = createStackNavigator(
	{
		Welcome: Welcome,
		MainContent: MainContent,
	},
	{ initialRouteName: 'Welcome', headerMode: 'none' }
);

const Navigation = createAppContainer(MainNavigator);

const App = () => (
	<SafeAreaProvider>
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
	</SafeAreaProvider>
);

export default App;
