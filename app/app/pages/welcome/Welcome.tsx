import React, { FunctionComponent, useState } from 'react';
import { SafeAreaView, View, Image } from 'react-native';
import { SparkPageContainer } from '../../atoms/SparkPageContainer';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { SparkButton } from '../../atoms/SparkButton';
import { SparkText } from '../../atoms/SparkText';
import { SparkPageTitle } from '../../atoms/SparkPageTitle';
import { colours } from '../../styles/ColourPalette';
import { useInterval } from '../../utils/useInterval';

export const unwrappedWelcome: FunctionComponent<NavigationInjectedProps> = ({
	navigation,
}) => {
	const [blasters, setBlasters] = useState(Math.random() * 1000);
	const [rate, setRate] = useState(Math.random() * 100);

	useInterval(() => {
		setBlasters(blasters + (2 - Math.random() * 3));
		setRate(rate + Math.random() * 4 - 1);
	}, 2000);

	return (
		<SafeAreaView>
			<SparkPageContainer style={{ padding: 0 }}>
				<View style={{ alignItems: 'center' }}>
					<SparkPageTitle>inkwall</SparkPageTitle>
					<SparkText style={{ padding: 5, maxWidth: '60%', textAlign: 'center' }}>
						anonymous location messaging in your own handwriting
					</SparkText>
				</View>
				<View style={{ alignItems: 'center' }}>
					<SparkButton
						size="big"
						onPress={() => {
							navigation.navigate('MainContent');
						}}
					>
						Let's go
					</SparkButton>
					<SparkText size="small" style={{ marginTop: 10 }}>
						<SparkText size="small" semiBold primary>
							{blasters.toFixed(0)}
						</SparkText>{' '}
						people posting{' '}
						<SparkText size="small" semiBold primary>
							{rate.toFixed(0)}
						</SparkText>{' '}
						messages daily
					</SparkText>
				</View>
			</SparkPageContainer>
		</SafeAreaView>
	);
};

export const Welcome = withNavigation(unwrappedWelcome);
