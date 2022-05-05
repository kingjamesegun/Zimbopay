import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/reducers';
import 'react-native-gesture-handler';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigation } from './navigation';

const App = () => {
 return(
	<View style={{ flex: 1, flexDirection: 'column', backgroundColor: "#dedede"}}>
		<Navigation />
	</View>)
;}

export default function AppWrapper() {
	return (
		<ReduxProvider store={store}>
			<App />
		</ReduxProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
