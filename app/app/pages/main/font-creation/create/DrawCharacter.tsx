import React, {
	FunctionComponent,
	useState,
} from 'react';
import { View, GestureResponderEvent } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colours } from '../../../../styles/ColourPalette';
import moment from 'moment';
import { SparkButton } from '../../../../atoms/SparkButton';
import { useStateValue } from '../../../../store/Store';
import { SparkText } from '../../../../atoms/SparkText';

interface DrawCharacterProps {
	character: string;
	size: [number, number];
}

export const DrawCharacter: FunctionComponent<DrawCharacterProps> = ({
	character,
	size,
}) => {
	const [lastDraw, setLastDraw] = useState(new Date() as Date);
	const [validStart, setValidStart] = useState(true);
	const [{ rawFont }, dispatch] = useStateValue();

	const updateSvgPath = (event: GestureResponderEvent) => {
		if (!validStart) {
			return;
		}

		const { locationX, locationY } = event.nativeEvent;
		if (
			locationX < 5 ||
			locationX > size[0] - 5 ||
			locationY < 5 ||
			locationY > size[1] - 5
		) {
			setValidStart(false);
			return;
		}
		const now = new Date();
		const msSinceLastDraw = Math.abs(moment(lastDraw).diff(now, 'ms'));
		const type =
			rawFont[character]?.length === 0 || msSinceLastDraw > 200 ? 'M' : 'L';

		setLastDraw(now);
		dispatch({
			type: 'UPDATE_LETTER',
			payload: {
				letter: character,
				pointType: type,
				x: locationX,
				y: locationY,
			},
		});
	};

	const singlePress = (event: GestureResponderEvent) => {
		setValidStart(true);
	};

	return (
		<View>
			<SparkText>Draw a '{character}'</SparkText>
			<View
				style={{ borderWidth: 1, borderColor: colours.greyDark, borderRadius: 5 }}
			>
				<View
					onTouchStart={singlePress}
					onTouchMove={updateSvgPath}
					style={{
						width: size[0],
						height: size[1],
						borderColor: colours.grey,
					}}
				>
					<Svg
						width={size[0]}
						height={size[1]}
						viewBox={`0 0 ${size[0]} ${size[1]}`}
						fill="none"
						stroke={colours.primary}
						strokeWidth="5"
					>
						<Path d={rawFont[character] ?? ''} />
					</Svg>
				</View>
				<View
					style={{
						position: 'absolute',
						width: size[0],
						height: size[1] * 0.75,
						borderBottomWidth: 2,
						borderBottomColor: colours.grey,
						zIndex: -1,
					}}
				></View>
				<SparkButton
					onPress={() =>
						dispatch({ type: 'DELETE_LETTER', payload: { letter: character } })
					}
					type="secondary"
					innerStyle={{
						width: '100%',
						alignItems: 'center',
						borderRadius: 5,
					}}
				>
					try again
				</SparkButton>
			</View>
		</View>
	);
};
