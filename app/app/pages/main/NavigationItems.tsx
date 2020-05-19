import React from 'react';
import { IconHome, IconEdit, IconPlus } from '../../atoms/Icons';
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
		label: 'Saved',
		Icon: IconPlus,
		page: <SparkText>Profile</SparkText>,
	},
	{
		label: 'Font',
		Icon: IconEdit,
		page: <FontCreation />,
	},
];
