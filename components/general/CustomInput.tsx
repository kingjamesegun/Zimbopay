import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../../colors';


type LoginProps ={
    value: string,
    setValue?:  (text: any) => void;
    placeholder: string,
    secureTextEntry: boolean
}

const CustomInput = ({ value, setValue, placeholder, secureTextEntry } : LoginProps) => {
	return (
		<View style={Styles.inputContainer}>
			<TextInput
				value={value}
				onChangeText={setValue}
				placeholder={placeholder}
				style={Styles.input}
                secureTextEntry={true}
			/>
		</View>
	);
};

const Styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: 'white',
		width: '100%',
		borderColor: '#e8e8e8',
		borderWidth: 1,
		borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginVertical: 10
	},
	input: {
        color: colors.black
    },
});
export default CustomInput;
