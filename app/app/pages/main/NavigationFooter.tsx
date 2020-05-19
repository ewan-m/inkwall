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
				borderTopColor: colours.grey,
				backgroundColor: 'white',
				elevation: 10,
				shadowColor: 'black',
				shadowOpacity: 1,
			}}
		>
			{navigationItems.map(({ Icon }, index) => (
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
							fill={index === selectedNavIndex ? colours.primary : colours.greyDark}
						/>
					</View>
				</TouchableOpacity>
			))}
		</View>
	);
};
