import React, { FunctionComponent } from 'react';
import { useStateValue } from '../../../../store/Store';
import Svg, { Path } from 'react-native-svg';
import { scaledFontSize, SparkText } from '../../../../atoms/SparkText';
import { optimizeSvgPath } from '../utils/svg-optimizer';

interface LetterPathProps {
	letter: string;
	drawBoxWidth: number;
	drawBoxHeight: number;
}

export const LetterPath: FunctionComponent<LetterPathProps> = ({
	letter,
	drawBoxHeight,
	drawBoxWidth,
}) => {
	const [{ rawFont }] = useStateValue();
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
			width={scaledFontSize(38) * (calculatedWidth / drawBoxHeight)}
			height={scaledFontSize(38)}
			viewBox={`0 0 ${calculatedWidth} ${drawBoxHeight}`}
			fill="none"
			stroke="#000"
			strokeWidth="15"
		>
			<Path d={calculatedPath} />
		</Svg>
	) : (
		<SparkText size="big">{letter}</SparkText>
	);
};
