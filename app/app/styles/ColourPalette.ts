export type SparkColour =
	| 'primary'
	| 'primaryLight'
	| 'grey'
	| 'greyLight'
	| 'greyDark'
	| 'successGreen'
	| 'failureRed'
	| 'primaryText'
	| 'secondaryText';

export const colours: { [colour in SparkColour]: string } = {
	primary: '#23266D',
	primaryLight: '#4a4fb4',
	grey: '#e9e8e8',
	greyLight: '#f4f4f4',
	greyDark: '#646568',
	successGreen: '#3bab28',
	failureRed: '#e91c1c',
	primaryText: '#2f1a45',
	secondaryText: '#646569',
};
