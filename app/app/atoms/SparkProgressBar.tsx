import React, { FunctionComponent, useState } from 'react';
import {
	ViewProps,
	Dimensions,
	View,
	Animated,
	ImageBackground,
} from 'react-native';
import { colours } from '../styles/ColourPalette';
import LinearGradient from 'react-native-linear-gradient';
import { useInterval } from '../utils/useInterval';
import { SparkText } from './SparkText';

interface SparkProgressBarProps extends ViewProps {
	currentStep: number;
	totalSteps: number;
	stepLabels: Array<string>;
}

export const SparkProgressBar: FunctionComponent<SparkProgressBarProps> = ({
	currentStep,
	totalSteps,
	stepLabels,
}) => {
	const totalWidth = Dimensions.get('window').width;
	const transform = (step: number) =>
		Number(((step / totalSteps) * totalWidth).toFixed(0));

	const renderWidth = new Animated.Value(transform(currentStep - 1));
	Animated.timing(renderWidth, {
		toValue: transform(currentStep),
		duration: 500,
	}).start();

	return (
		<View
			style={{
				width: '100%',
				borderBottomColor: colours.greyDark,
				borderBottomWidth: 1,
				paddingBottom: 10,
				backgroundColor: 'white',
			}}
		>
			<View style={{ height: 20 }}>
				<Animated.View
					style={{
						width: renderWidth,
						height: 20,
						borderTopRightRadius: 10,
						borderBottomRightRadius: 10,
						overflow: 'hidden',
					}}
				>
					<ImageBackground
						source={require('../../assets/images/button-bg.jpg')}
						style={{ width: '100%', height: 20 }}
					></ImageBackground>
				</Animated.View>
			</View>
			<View style={{ display: 'flex', flexDirection: 'row', paddingTop: 5 }}>
				{stepLabels.map((label, index) => (
					<SparkText
						key={label}
						semiBold={index < currentStep}
						style={{
							textAlign: 'center',
							width: totalWidth / totalSteps,
							color:
								index < currentStep ? colours.primaryLight : colours.secondaryText,
						}}
					>
						{index + 1 + ') '}
						{label}
					</SparkText>
				))}
			</View>
		</View>
	);
};
