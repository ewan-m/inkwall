import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { colours } from '../../styles/ColourPalette';

type NavigationFooterProps = {
	navigationItems: Array<any>;
	selectedNavIndex: number;
	setSelectedNavIndex: Dispatch<SetStateAction<number>>;
};

export const NavigationFooter: FunctionComponent<NavigationFooterProps> = ({
	navigationItems,
	selectedNavIndex,
	setSelectedNavIndex,
}) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				height: 55,
				justifyContent: 'space-between',
				borderTopWidth: 1,
				borderTopColor: colours.greyLight,
				backgroundColor: '#fff',
			}}
		>
			{navigationItems.map(({ Icon, label }, index) => (
				<TouchableOpacity
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}
					activeOpacity={0.75}
					onPress={() => setSelectedNavIndex(index)}
				>
					<View
						style={{
							width: 30,
							height: 30,
							padding: 0,
						}}
					>
						<Icon
							fill={
								index === selectedNavIndex ? colours.primary : colours.secondaryText
							}
						/>
					</View>
				</TouchableOpacity>
			))}
		</View>
	);
};
