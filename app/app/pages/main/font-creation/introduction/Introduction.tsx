import React, { FunctionComponent } from 'react';
import { View, Picker, CheckBox, AsyncStorage } from 'react-native';
import { SparkText } from '../../../../atoms/SparkText';
import { DrawCharacter } from '../create/DrawCharacter';
import { SparkButton } from '../../../../atoms/SparkButton';
import { SparkCard } from '../../../../atoms/SparkCard';
import { colours } from '../../../../styles/ColourPalette';
import { TextInput } from 'react-native-gesture-handler';
import { SparkOptions } from '../../../../atoms/SparkOptions';
import { useStateValue } from '../../../../store/Store';

interface IntroductionProps {
	goToNextStep: () => void;
}

export const Introduction: FunctionComponent<IntroductionProps> = ({
	goToNextStep,
}) => {
	const [, dispatch] = useStateValue();
	const loadFont = async () => {
		const font = await AsyncStorage.getItem('font');
		if (font) {
			dispatch({ type: 'UPDATE_FONT', payload: { rawFont: JSON.parse(font) } });
		}
	};

	return (
		<View style={{ width: '100%', padding: 15 }}>
			<SparkText primary size="big" style={{ marginBottom: 5 }}>
				Create your own font
			</SparkText>
			<SparkText style={{ marginBottom: 20 }}>
				Inject personality into your online writing.
			</SparkText>
			<SparkCard style={{ padding: 10 }}>
				<SparkText semiBold primary style={{ marginBottom: 5 }}>
					Which alphabet?
				</SparkText>
				<View
					style={{
						borderColor: colours.greyDark,
						borderBottomWidth: 1,
						marginBottom: 30,
					}}
				>
					<Picker>
						<Picker.Item label="Latin (abc...)" />
					</Picker>
				</View>
				<SparkText semiBold primary style={{ marginBottom: 5 }}>
					Include capital letters?
				</SparkText>
				<SparkOptions
					selected={['OF COURSE!']}
					setSelected={() => {}}
					options={['OF COURSE!', 'nope']}
					style={{ marginBottom: 30 }}
				/>
				<SparkText semiBold primary style={{ marginBottom: 5 }}>
					Customize punctuation?
				</SparkText>
				<SparkOptions
					selected={['Yes, please.']}
					setSelected={() => {}}
					options={['Yes, please.', 'nah']}
					style={{ marginBottom: 30 }}
				/>
				<SparkText semiBold primary style={{ marginBottom: 5 }}>
					Any additional characters?
				</SparkText>
				<TextInput
					style={{ borderColor: colours.greyDark, borderBottomWidth: 1 }}
				/>
				<SparkText size="small" style={{ marginBottom: 30, marginTop: 5 }}>
					Are you a fan of a good #hashtag?
				</SparkText>
			</SparkCard>
			<SparkButton
				onPress={() => goToNextStep()}
				size="big"
				style={{ width: '100%', marginVertical: 20 }}
			>
				Next
			</SparkButton>
			<SparkButton
				onPress={() => loadFont()}
				size="big"
				style={{ width: '100%', marginVertical: 20 }}
			>
				Load Font
			</SparkButton>
		</View>
	);
};
