import React, { FunctionComponent } from 'react';
import { SparkPageContainer } from '../../../atoms/SparkPageContainer';
import { SparkText, scaledFontSize } from '../../../atoms/SparkText';
import { SparkPageTitle } from '../../../atoms/SparkPageTitle';
import { View } from 'react-native';
import { Blast, SparkBlast } from '../../../atoms/SparkBlast';
import { SparkTabs } from '../../../atoms/SparkTabs';
import { IconPlus } from '../../../atoms/Icons';
import { SparkButton } from '../../../atoms/SparkButton';
import { colours } from '../../../styles/ColourPalette';

const mockData: Blast[] = [
	{
		date: new Date().toString(),
		distance: '1',
		score: '12',
		message: `If capitalism really worked then @Pringles and @pritt_stick would have collaborated on a Pringles tube with a twist up base, so you never have to reach in deep to the bottom again, just a quick twist and bam`,
	},
];

export const Home: FunctionComponent = () => {
	return (
		<SparkPageContainer>
			<SparkTabs />
			<SparkBlast blast={mockData[0]} />
			<SparkBlast blast={mockData[0]} />
			<SparkBlast blast={mockData[0]} />
			<SparkBlast blast={mockData[0]} />
			<SparkBlast blast={mockData[0]} />
			<SparkButton
				size="big"
				innerStyle={{ paddingVertical: 15, paddingHorizontal: 15 }}
				style={{
					position: 'absolute',
					right: 0,
					top: 500,
					padding: 0,
					elevation: 6,
					shadowColor: colours.greyDark,
					shadowOpacity: 0.8,
				}}
			>
				<IconPlus width={40} height={40} fill="white" />
			</SparkButton>
		</SparkPageContainer>
	);
};
