import React from 'react';
import { IconUser, IconMap, IconHome, IconEdit } from '../../atoms/Icons';
import { SparkText } from '../../atoms/SparkText';
import { Home } from './home/Home';
import { FontCreation } from './font-creation/FontCreation';

export const navigationItems: Array<any> = [
	{
		label: 'Home',
		Icon: IconHome,
		page: <Home />,
	},
	{
		label: 'Map',
		Icon: IconMap,
		page: <SparkText>MEssaging?</SparkText>,
	},
	{
		label: 'Font',
		Icon: IconEdit,
		page: <FontCreation />,
	},
	{
		label: 'Profile',
		Icon: IconUser,
		page: <SparkText>Profile</SparkText>,
	},
];
