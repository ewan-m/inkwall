import React, { FunctionComponent } from 'react';
import { View, ViewProps } from 'react-native';
import { colours } from '../styles/ColourPalette';

export const SparkCard: FunctionComponent<ViewProps> = ({
	children,
	style,
}) => (
	<View
		style={Object.assign(
			{},
			{
				backgroundColor: '#fff',
				marginVertical: 10,
				elevation: 2,
				shadowColor: colours.greyDark,
				shadowOpacity: 0.1,
			},
			style
		)}
	>
		{children}
	</View>
);
