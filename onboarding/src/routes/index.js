import { createStackNavigator, createAppContainer } from 'react-navigation';

import ActivityLevel from '../containers/Onboarding/ActivityLevel';
import DueDate from '../containers/Onboarding/DueDate';
import Goals from '../containers/Onboarding/Goals';
import Success from '../containers/Onboarding/Success';

const AppNavigator = createStackNavigator(
	{
		Goals: {
			screen: Goals,
			navigationOptions: { header: null }
		},
		DueDate: {
			screen: DueDate,
			navigationOptions: { header: null }
		},
		ActivityLevel: {
			screen: ActivityLevel,
			navigationOptions: { header: null }
		},
		Success: {
			screen: Success,
			navigationOptions: { header: null }
		}
	},
	{ initialRouteName: 'Goals' }
);

export const AppContainer = createAppContainer(AppNavigator);
