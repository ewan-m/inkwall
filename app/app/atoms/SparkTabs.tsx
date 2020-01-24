import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { SparkText } from './SparkText';
import { colours } from '../styles/ColourPalette';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SparkTab: FunctionComponent<{ isActive?: boolean }> = ({
	children,
	isActive,
}) => (
	<TouchableOpacity
		style={{ width: 206, height: 50, flex: 1 }}
		onPress={() => {
			console.log('yep');
		}}
	>
		<View
			style={{
				borderBottomColor: isActive ? colours.primary : 'white',
				borderBottomWidth: 3,
				backgroundColor: 'white',
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<SparkText
				semiBold={isActive}
				style={{ color: isActive ? colours.primary : colours.secondaryText }}
			>
				{children}
			</SparkText>
		</View>
	</TouchableOpacity>
);

export const SparkTabs: FunctionComponent = () => {
	return (
		<View
			style={{
				width: '100%',
				justifyContent: 'space-between',
				height: 60,
				flexDirection: 'row',
			}}
		>
			<SparkTab isActive>hot</SparkTab>
			<SparkTab>recent</SparkTab>
		</View>
	);
};
