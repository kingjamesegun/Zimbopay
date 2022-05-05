
import AuthNavigator from './AuthStackNavigator';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator'

const switchNavigator = createSwitchNavigator({
	Auth: AuthNavigator,
	Main : TabNavigator
}, {
    initialRouteName: 'Auth'
});

const Navigation = createAppContainer(switchNavigator);

export {Navigation};