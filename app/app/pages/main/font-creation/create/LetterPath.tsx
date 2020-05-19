import React, { FunctionComponent } from 'react';
import { useStateValue } from '../../../../store/Store';
import Svg, { Path } from 'react-native-svg';
import { scaledFontSize, SparkText } from '../../../../atoms/SparkText';
import { optimizeSvgPath } from '../utils/svg-optimizer';
import { View, Dimensions } from 'react-native';
import { getBoxDimensions } from '../../../../font-processor/get-box-dimensions';
import { colours } from '../../../../styles/ColourPalette';

interface LetterPathProps {
	letter: string;
	size?: number;
	thickness?: number;
	colour?: string;
}

export const LetterPath: FunctionComponent<LetterPathProps> = ({
	letter,
	size = 38,
	thickness = 10,
	colour = colours.secondaryText,
}) => {
	const [{ rawFont }] = useStateValue();

	const [drawBoxWidth, drawBoxHeight] = getBoxDimensions();
	const letterPadding = 15;

	let calculatedWidth = drawBoxWidth;
	let calculatedPath = rawFont[letter] ?? '';

	if (calculatedPath) {
		const points = calculatedPath
			.trim()
			.split(' ')
			.map((coordsString) => {
				const [x, y] = coordsString
					.substring(1)
					.split(',')
					.map((str) => Number(str));
				return {
					x,
					y,
					type: coordsString[0],
				};
			});

		const xPoints = points.map((coord) => coord.x);
		const [minX, maxX] = [Math.min(...xPoints), Math.max(...xPoints)];

		calculatedPath = points
			.map(
				(coords) => `${coords.type}${coords.x - minX + letterPadding},${coords.y}`
			)
			.join(' ');

		calculatedWidth = maxX - minX + 2 * letterPadding;
	}

	return calculatedPath ? (
		<Svg
			width={scaledFontSize(size) * (calculatedWidth / drawBoxHeight)}
			height={scaledFontSize(size)}
			viewBox={`0 0 ${calculatedWidth} ${drawBoxHeight}`}
			fill="none"
			stroke={colour}
			strokeWidth={thickness}
		>
			<Path d={calculatedPath} />
		</Svg>
	) : (
		<View
			style={{ width: scaledFontSize(20), height: scaledFontSize(38) }}
		></View>
	);
};
