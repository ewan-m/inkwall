import React, { FunctionComponent } from 'react';
import { ViewProps, View } from 'react-native';
import { SparkText, scaledFontSize } from './SparkText';
import moment from 'moment';
import { colours } from '../styles/ColourPalette';
import { IconArrowUp, IconArrowDown, IconChat } from './Icons';

export interface Blast {
	message: string;
	date: string;
	distance: string;
	score: string;
}

interface SparkBlastProps extends ViewProps {
	blast: Blast;
}

export const SparkBlast: FunctionComponent<SparkBlastProps> = ({
	blast,
	style,
}) => {
	return (
		<View
			style={{
				backgroundColor: '#fff',
				marginVertical: 10,
			}}
		>
			<View
				style={{
					width: '100%',
					alignItems: 'center',
					padding: 15,
					paddingBottom: 7.5,
					flexDirection: 'row',
				}}
			>
				<View style={Object.assign({}, { flex: 1 }, style)}>
					<SparkText size="small" style={{ marginBottom: 2 }}>
						{moment(blast.date).fromNow()}
					</SparkText>
					<SparkText primary size="normal">
						{blast.message}
					</SparkText>
				</View>
				<View style={{ marginLeft: 10, alignItems: 'center' }}>
					<View
						style={{
							width: 20,
							height: 20,
							padding: 0,
						}}
					>
						<IconArrowUp fill={colours.primaryLight} />
					</View>
					<SparkText size="big" style={{ color: colours.primary }}>
						{blast.score}
					</SparkText>

					<View
						style={{
							width: 20,
							height: 20,
							padding: 0,
						}}
					>
						<IconArrowDown fill={colours.primaryLight} />
					</View>
				</View>
			</View>
			<View
				style={{
					paddingHorizontal: 15,
					paddingTop: 7.5,
					paddingBottom: 10,
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<View
					style={{
						width: scaledFontSize(18),
						height: scaledFontSize(18),
						marginRight: 5,
					}}
				>
					<IconChat fill={colours.primary} />
				</View>
				<SparkText semiBold style={{ color: colours.primary }}>
					5 comments
				</SparkText>
			</View>
		</View>
	);
};
