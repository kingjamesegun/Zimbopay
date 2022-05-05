import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';

const UserLogin = () => {
	const screenState = useSelector((state: RootState) => state.userList);
	console.log(screenState);
	return (
		<>
			{screenState.loading && <Text>Loading</Text>}
			{screenState.error && <Text>Error</Text>}
			{!screenState.loading && !screenState.error && (
				<View>
					<Text>Sign up Page</Text>
				</View>
			)}
		</>
	);
};

export default UserLogin;
