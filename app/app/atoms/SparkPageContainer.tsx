import React, { FunctionComponent, useEffect, useState } from 'react';
import { Animated, Easing, ViewProps, Dimensions } from 'react-native';
import { colours } from '../styles/ColourPalette';

export const SparkPageContainer: FunctionComponent<ViewProps> = ({
	children,
	style,
}) => {
	const [grow] = useState(new Animated.Value(0.98));
	useEffect(() => {
		Animated.timing(grow, {
			toValue: 1,
			duration: 250,
			useNativeDriver: true,
			easing: Easing.cubic,
		}).start();
	}, []);
	return (
		<Animated.View
			style={Object.assign(
				{},
				{
					alignItems: 'center',
					backgroundColor: '#fff',
					minHeight: Dimensions.get('window').height - 80,
					width: '100%',
					transform: [
						{
							scale: grow,
						},
					],
				},
				style
			)}
		>
			{children}
		</Animated.View>
	);
};
