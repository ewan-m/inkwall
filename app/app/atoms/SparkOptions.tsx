import React, { FunctionComponent } from 'react';
import { View, ViewProps, ScrollView } from 'react-native';
import { SparkButton } from './SparkButton';

interface SparkOptionsProps extends ViewProps {
	options: Array<string>;
	setSelected: (newSelected: Array<string>) => void;
	selected: Array<string>;
	allowMultipleSelected?: boolean;
	buttonSize?: 'big' | 'normal' | 'small';
}

export const SparkOptions: FunctionComponent<SparkOptionsProps> = ({
	options,
	selected,
	allowMultipleSelected,
	setSelected,
	buttonSize = 'small',
	style,
}) => {
	const selectItem = (item: string) => {
		setSelected(
			allowMultipleSelected
				? [...selected.filter((compare) => compare !== item), item]
				: [item]
		);
	};

	return (
		<ScrollView
			horizontal
			style={Object.assign(
				{},
				{
					display: 'flex',
					flexDirection: 'row',
					paddingVertical: 10,
				},
				style
			)}
		>
			{options.map((text) => (
				<SparkButton
					onPress={() => selectItem(text)}
					type={selected.includes(text) ? 'primary' : 'secondary'}
					size={buttonSize}
					key={text}
					style={{ marginRight: 5 }}
				>
					{text}
				</SparkButton>
			))}
		</ScrollView>
	);
};
