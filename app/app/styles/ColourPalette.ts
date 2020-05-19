export type SparkColour =
	| 'primary'
	| 'primaryLight'
	| 'primaryDark'
	| 'grey'
	| 'greyLight'
	| 'greyDark'
	| 'primaryText'
	| 'secondaryText';

export const colours: { [colour in SparkColour]: string } = {
	primary: '#18baa9',
	primaryDark: '#0f8a7d',
	primaryLight: '#92e9e0',
	grey: '#e9e8e8',
	greyLight: '#f4f4f4',
	greyDark: '#646568',
	primaryText: 'black',
	secondaryText: 'black',
};
