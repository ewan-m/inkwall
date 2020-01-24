import React, { FunctionComponent, useState } from 'react';
import { View, AsyncStorage, Dimensions, TextInput } from 'react-native';
import { SparkText } from '../../../../atoms/SparkText';
import { SparkButton } from '../../../../atoms/SparkButton';
import { useStateValue } from '../../../../store/Store';
import { SparkCard } from '../../../../atoms/SparkCard';
import { LetterPath } from '../create/LetterPreview';
import { colours } from '../../../../styles/ColourPalette';

export const Complete: FunctionComponent = () => {
	const [{ rawFont }] = useStateValue();
	const drawBoxWidth = (Dimensions.get('window').width - 100) / 2;
	const drawBoxHeight = drawBoxWidth * 1.5;
	const [testPhrase, setTestPhrase] = useState('');

	const saveFont = async () => {
		await AsyncStorage.setItem('font', JSON.stringify(rawFont));
	};

	return (
		<View style={{ width: '100%', padding: 15 }}>
			<SparkText primary size="big" style={{ marginBottom: 5 }}>
				Save your work
			</SparkText>
			<SparkText style={{ marginBottom: 20 }}>
				Now let's check out your font in action.
			</SparkText>
			<TextInput
				style={{
					backgroundColor: 'white',
					borderColor: colours.secondaryText,
					borderWidth: 1,
					padding: 20,
					borderRadius: 10,
				}}
				onChangeText={(text) => setTestPhrase(text)}
				value={testPhrase}
			/>
			<SparkCard style={{ width: '100%', padding: 10 }}>
				<View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
					{testPhrase.split('').map((letter, index) => (
						<LetterPath
							key={letter + index}
							drawBoxHeight={drawBoxHeight}
							drawBoxWidth={drawBoxHeight}
							letter={letter}
						/>
					))}
				</View>
			</SparkCard>
			<SparkButton size="big" onPress={saveFont}>
				Save
			</SparkButton>
		</View>
	);
};
