import React, { FunctionComponent, CSSProperties } from 'react';
import {
	TouchableOpacity,
	TouchableOpacityProps,
	StyleProp,
	ViewStyle,
	ImageBackground,
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
	type,
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
		<ImageBackground
			source={
				type === 'secondary'
					? require('../../assets/images/button-bg-2.jpg')
					: require('../../assets/images/button-bg.jpg')
			}
			style={Object.assign(
				{},
				{
					paddingVertical: { big: 20, normal: 15, small: 10 }[size],
					paddingHorizontal: { big: 40, normal: 30, small: 20 }[size],
					borderRadius: 40,
					overflow: 'hidden',
				},
				innerStyle
			)}
		>
			<SparkText
				semiBold
				size={size === 'small' ? 'normal' : size}
				style={{ color: type === 'secondary' ? colours.primary : '#fff' }}
			>
				{props.children}
			</SparkText>
		</ImageBackground>
	</TouchableOpacity>
);
