import React, { FunctionComponent, CSSProperties } from 'react';
import {
	TouchableOpacity,
	TouchableOpacityProps,
	StyleProp,
	ViewStyle,
	ImageBackground,
	View,
} from 'react-native';
import { colours } from '../styles/ColourPalette';
import { SparkText } from './SparkText';
import LinearGradient from 'react-native-linear-gradient';

export interface SparkButtonProps extends TouchableOpacityProps {
	size?: 'big' | 'normal' | 'small';
	type?: 'primary' | 'secondary';
	innerStyle?: StyleProp<ViewStyle>;
}

export const SparkButton: FunctionComponent<SparkButtonProps> = ({
	size = 'normal',
	type = 'primary',
	innerStyle,
	...props
}) => (
	<TouchableOpacity
		{...props}
		activeOpacity={0.75}
		style={Object.assign(
			{},
			{
				alignItems: 'center',
				borderRadius: 20,
			},
			props.style
		)}
	>
		<View
			style={Object.assign(
				{},
				{
					paddingVertical: { big: 20, normal: 15, small: 10 }[size],
					paddingHorizontal: { big: 40, normal: 30, small: 20 }[size],
					width: '100%',
					alignItems: 'center',
					overflow: 'hidden',
					backgroundColor:
						type === 'secondary' ? colours.grey : colours.primaryLight,
				},
				innerStyle
			)}
		>
			<SparkText
				semiBold
				size={size === 'small' ? 'normal' : size}
				style={{ color: type === 'secondary' ? colours.primaryDark : 'black' }}
			>
				{props.children}
			</SparkText>
		</View>
	</TouchableOpacity>
);
