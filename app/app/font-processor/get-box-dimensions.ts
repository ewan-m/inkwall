import { Dimensions } from 'react-native';

export function getBoxDimensions(): [number, number] {
	const drawBoxWidth = (Dimensions.get('window').width - 100) / 2;
	const drawBoxHeight = drawBoxWidth * 1.5;

	return [drawBoxWidth, drawBoxHeight];
}
