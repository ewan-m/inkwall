import React, { FunctionComponent } from 'react';
import { View, Image } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import { SparkText } from './SparkText';
import { colours } from '../styles/ColourPalette';

export const SparkPageTitle: FunctionComponent = ({ children }) => (
	<MaskedView
		style={{
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			height: 80,
			width: '100%',
		}}
		maskElement={
			<View
				style={{
					backgroundColor: 'transparent',
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<SparkText semiBold size="huge" primary>
					{children}
				</SparkText>
			</View>
		}
	>
		<View style={{ height: 80, flexDirection: 'row', flexWrap: 'nowrap' }}>
			{[
				require('../../assets/images/button-bg.jpg'),
				require('../../assets/images/button-bg.jpg'),
				require('../../assets/images/button-bg.jpg'),
				require('../../assets/images/button-bg.jpg'),
			].map((uri, index) => (
				<View key={index} style={{ width: 100, height: 100 }}>
					<Image source={uri} style={{ width: 100, height: 100 }} />
				</View>
			))}
		</View>
	</MaskedView>
);
