import React, { FunctionComponent } from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';
import { colours } from '../styles/ColourPalette';

const svgInheritanceProperties: SvgProps = {
	width: '100%',
	height: '100%',
	strokeWidth: 0,
	fill: colours.secondaryText,
};

export const IconHome: FunctionComponent<SvgProps> = (props) => (
	<Svg viewBox="0 0 24 24" {...svgInheritanceProperties} {...props}>
		<Path d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z" />
	</Svg>
);

export const IconUser: FunctionComponent<SvgProps> = (props) => (
	<Svg viewBox="0 0 24 24" {...svgInheritanceProperties} {...props}>
		<Path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" />
	</Svg>
);

export const IconMap: FunctionComponent<SvgProps> = (props) => (
	<Svg viewBox="0 0 24 24" {...svgInheritanceProperties} {...props}>
		<Path d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z" />
	</Svg>
);

export const IconArrowUp: FunctionComponent<SvgProps> = (props) => (
	<Svg viewBox="0 0 24 24" {...svgInheritanceProperties} {...props}>
		<Path d="M13 5.41V21a1 1 0 0 1-2 0V5.41l-5.3 5.3a1 1 0 1 1-1.4-1.42l7-7a1 1 0 0 1 1.4 0l7 7a1 1 0 1 1-1.4 1.42L13 5.4z" />
	</Svg>
);

export const IconArrowDown: FunctionComponent<SvgProps> = (props) => (
	<Svg viewBox="0 0 24 24" {...svgInheritanceProperties} {...props}>
		<Path d="M11 18.59V3a1 1 0 0 1 2 0v15.59l5.3-5.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 0 1 1.4-1.42l5.3 5.3z" />
	</Svg>
);

export const IconChat: FunctionComponent<SvgProps> = (props) => (
	<Svg viewBox="0 0 24 24" {...svgInheritanceProperties} {...props}>
		<Path d="M6 14H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v13a1 1 0 0 1-1.7.7L16.58 18H8a2 2 0 0 1-2-2v-2zm0-2V8c0-1.1.9-2 2-2h8V4H4v8h2zm14-4H8v8h9a1 1 0 0 1 .7.3l2.3 2.29V8z" />
	</Svg>
);

export const IconPlus: FunctionComponent<SvgProps> = (props) => (
	<Svg viewBox="0 0 24 24" {...svgInheritanceProperties} {...props}>
		<Path d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z" />
	</Svg>
);

export const IconEdit: FunctionComponent<SvgProps> = (props) => (
	<Svg viewBox="0 0 24 24" {...svgInheritanceProperties} {...props}>
		<Path d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" />
	</Svg>
);

export const IconRefresh: FunctionComponent<SvgProps> = (props) => (
	<Svg viewBox="0 0 24 24" {...svgInheritanceProperties} {...props}>
		<Path d="M6 18.7V21a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7.1A7 7 0 0 0 19 12a1 1 0 1 1 2 0 9 9 0 0 1-15 6.7zM18 5.3V3a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.9A7 7 0 0 0 5 12a1 1 0 1 1-2 0 9 9 0 0 1 15-6.7z" />
	</Svg>
);

export const IconArrowLeft: FunctionComponent<SvgProps> = (props) => (
	<Svg viewBox="0 0 24 24" {...svgInheritanceProperties} {...props}>
		<Path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z" />
	</Svg>
);

export const IconArrowRight: FunctionComponent<SvgProps> = (props) => (
	<Svg viewBox="0 0 24 24" {...svgInheritanceProperties} {...props}>
		<Path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z" />
	</Svg>
);
