import * as React from 'react';
import { Text, View } from 'react-native';
import {
	NavigationContainer,
	TabActionHelpers,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Transactions from '../screens/transactions';
import Account from '../screens/Account';
import Offers from '../screens/offers';
import Pay from '../screens/Payment.tsx';

const Tab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name='Home' component={Home} />
				<Tab.Screen name='Transactions' component={Transactions} />
				<Tab.Screen name='Pay Merchant' component={Pay} />
				<Tab.Screen name='Offers' component={Offers} />
				<Tab.Screen name='Account' component={Account} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default Tabs;
