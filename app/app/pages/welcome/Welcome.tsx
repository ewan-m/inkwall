import React, { FunctionComponent, useEffect } from 'react';
import { SparkPageContainer } from '../../atoms/SparkPageContainer';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { SparkButton } from '../../atoms/SparkButton';
import AsyncStorage from '@react-native-community/async-storage';
import { useStateValue } from '../../store/Store';
import { SafeAreaView } from 'react-native';

export const unwrappedWelcome: FunctionComponent<NavigationInjectedProps> = ({
	navigation,
}) => {
	const [, dispatch] = useStateValue();

	const goToMain = () => {
		navigation.navigate('MainContent');
	};

	const loadFont = async () => {
		const font = await AsyncStorage.getItem('font');
		if (font) {
			dispatch({ type: 'UPDATE_FONT', payload: { rawFont: JSON.parse(font) } });
		}
	};

	useEffect(() => {
		loadFont();
	}, []);

	return (
		<SafeAreaView>
			<SparkPageContainer
				style={{
					padding: 0,
					minHeight: '100%',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<SparkButton onPress={goToMain} style={{ marginTop: 30 }}>
					Let's go
				</SparkButton>
			</SparkPageContainer>
		</SafeAreaView>
	);
};

export const Welcome = withNavigation(unwrappedWelcome);
