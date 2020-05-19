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
import { LetterPath } from './LetterPath';
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

	return (
		<View style={{ width: '100%', padding: 15 }}>
			<SparkText primary size="big" style={{ marginBottom: 5 }}>
				Draw your letters
			</SparkText>
			<SparkText style={{ marginBottom: 30 }}>
				This is a good time to use a stylus if you have one!
			</SparkText>
			<SparkCard
				style={{
					width: '100%',
				}}
			>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<DrawCharacter character={currentLetter.toLocaleUpperCase()} />
					<DrawCharacter character={currentLetter} />
				</View>
			</SparkCard>
			<SparkCard style={{ width: '100%' }}>
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
								<LetterPath key={letter + index} letter={letter} />
							))}
						</View>
					</View>
				) : (
					<SparkText>{['a', 'b', 'c'].join('')}</SparkText>
				)}
			</SparkCard>
			<View style={{ display: 'flex', flexDirection: 'row' }}>
				<LettersProgress setCurrentLetter={updateNav} />
			</View>
		</View>
	);
};
