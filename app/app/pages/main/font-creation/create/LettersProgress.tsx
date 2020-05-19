import React, { FunctionComponent, Dispatch, useState } from 'react';
import { useStateValue } from '../../../../store/Store';
import { SparkOptions } from '../../../../atoms/SparkOptions';
import { lowercaseLatin } from '../alphabets/latin-alphabet';

interface LettersProgressProps {
	setCurrentLetter: Dispatch<string>;
}

export const LettersProgress: FunctionComponent<LettersProgressProps> = ({
	setCurrentLetter,
}) => {
	const [completed, setCompleted] = useState(['a']);
	return (
		<SparkOptions
			buttonSize="big"
			selected={completed}
			setSelected={(newLetters) => {
				setCompleted(newLetters);
				setCurrentLetter(newLetters[newLetters.length - 1]);
			}}
			allowMultipleSelected
			options={[...lowercaseLatin, 'Next']}
		/>
	);
};
