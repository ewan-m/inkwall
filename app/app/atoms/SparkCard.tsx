import React, { FunctionComponent } from 'react';
import { View, ViewProps } from 'react-native';

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
			},
			style
		)}
	>
		{children}
	</View>
);
