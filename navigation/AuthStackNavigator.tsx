import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Stacks() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name='Login' component={LoginScreen} />
				<Stack.Screen name='Register' component={RegisterScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Stacks;
