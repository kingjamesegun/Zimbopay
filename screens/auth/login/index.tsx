import React, { Children, FunctionComponent, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../../../colors';
import Button from '../../../components/general/Button';
import CustomInput from '../../../components/general/CustomInput';
import { RootState } from '../../../redux/reducers';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import Texti from '../../../components/Text/Text';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface Nav{
	navigate: (value: string)=>void
}

const UserLogin = () => {
	const screenState = useSelector((state: RootState) => state.userList);
	const [emailPhone, setEmailPhone] = useState('');
	const [password, setPassword] = useState('');
	const {navigate}= useNavigation<Nav>();
	return (
		<>
			{screenState.loading && <Text>Loading</Text>}
			{screenState.error && <Text>Error</Text>}
			{!screenState.loading && !screenState.error && (
				<View style={styles.root}>
					<Text style={styles.title}>Welcome Back</Text>
					<CustomInput
						placeholder='Email Id/Mobile Number'
						value={emailPhone}
						setValue={setEmailPhone}
						secureTextEntry={false}
					/>
					<CustomInput
						placeholder='Password'
						value={password}
						setValue={setPassword}
						secureTextEntry
					/>
					<Texti style={styles.otp}>Sign in with otp</Texti>
					<Button title='Sign in' onPress={() => {}} />
					<TouchableOpacity onPress={() => {
						navigate("Register")
					}}>
						{/* Go to Signup */}

						<Texti style={styles.user}>Sign in as a different user</Texti>
					</TouchableOpacity>
					<View>
						<Text style={styles.otherText}>Or Sign in with</Text>
						<View style={styles.social}>
							<Entypo
								name='facebook-with-circle'
								size={45}
								color={colors.deepBlue}
								style={styles.socialIcons}
							/>
							<FontAwesome
								name='google-plus-circle'
								size={50}
								color={colors.red}
								style={styles.socialIcons}
							/>
						</View>
					</View>
				</View>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		padding: 20,
	},
	title: {
		fontSize: 24,
		marginTop: 100,
		marginBottom: 50,
	},
	otp: {
		color: colors.black,
		textTransform: 'uppercase',
		marginVertical: 5,
		fontSize: 14,
		// fontWeight: 'semibold'
	},
	user: {
		color: colors.primary,
		textTransform: 'uppercase',
		fontSize: 14,
	},
	others: {
		color: colors.black,
	},
	otherText: {
		textTransform: 'uppercase',
		color: colors.black,
	},
	social: {
		display: 'flex',
		flexDirection: 'row',
	},
	socialIcons: {
		marginHorizontal: 5,
	},
});

export default UserLogin;
