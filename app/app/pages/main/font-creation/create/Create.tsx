import React, { FunctionComponent, useState } from 'react';
import { SparkText, scaledFontSize } from '../../../../atoms/SparkText';
import { SparkCard } from '../../../../atoms/SparkCard';
import { Picker, View, Dimensions } from 'react-native';
import { lowercaseLatin } from '../alphabets/latin-alphabet';
import { DrawCharacter } from './DrawCharacter';
import { SparkButton } from '../../../../atoms/SparkButton';
import { IconArrowLeft, IconArrowRight } from '../../../../atoms/Icons';
import { colours } from '../../../../styles/ColourPalette';
import Svg, { Path } from 'react-native-svg';
import { SparkOptions } from '../../../../atoms/SparkOptions';
import { previewImage } from './preview-image';
import { LetterPath } from './LetterPreview';
import { LettersProgress } from './LettersProgress';

export interface Font {
	[index: string]: string;
}

interface CreateProps {
	goToNextStep: () => void;
}

export const Create: FunctionComponent<CreateProps> = ({ goToNextStep }) => {
	const [currentLetter, setCurrentLetter] = useState(lowercaseLatin[0]);

	const updateNav = (itemName: string) => {
		if (itemName === 'Next') {
			goToNextStep();
		} else {
			setCurrentLetter(itemName);
		}
	};

	const drawBoxWidth = (Dimensions.get('window').width - 100) / 2;
	const drawBoxHeight = drawBoxWidth * 1.5;
	return (
		<View style={{ width: '100%', padding: 15 }}>
			<SparkText primary size="big" style={{ marginBottom: 5 }}>
				Draw your letters
			</SparkText>
			<SparkText style={{ marginBottom: 20 }}>
				This is a good time to use a stylus if you have one!
			</SparkText>
			<SparkCard
				style={{
					width: '100%',
					padding: 10,
				}}
			>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<LettersProgress setCurrentLetter={updateNav} />
				</View>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<DrawCharacter
						size={[drawBoxWidth, drawBoxHeight]}
						character={currentLetter.toLocaleUpperCase()}
					/>
					<DrawCharacter
						size={[drawBoxWidth, drawBoxHeight]}
						character={currentLetter}
					/>
				</View>
			</SparkCard>
			<SparkCard style={{ width: '100%', padding: 10 }}>
				{previewImage[currentLetter] ? (
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<SparkText size="big" style={{ marginRight: 10 }}>
							{previewImage[currentLetter].image}
						</SparkText>
						<View style={{ display: 'flex', flexDirection: 'row' }}>
							{previewImage[currentLetter].phrase.split('').map((letter, index) => (
								<LetterPath
									key={letter + index}
									drawBoxWidth={drawBoxWidth}
									drawBoxHeight={drawBoxHeight}
									letter={letter}
								/>
							))}
						</View>
					</View>
				) : (
					<SparkText>{['a', 'b', 'c'].join('')}</SparkText>
				)}
			</SparkCard>
		</View>
	);
};
