import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../../../colors';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonProps {
	title: string;
	onPress: () => void;
}

const Button = ({ title, onPress }: ButtonProps) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.button}>
			{/* <LinearGradient
            colors={["#009EFF", "#00CDFF"]}> */}
				<Text style={styles.text}>{title}</Text>
			{/* </LinearGradient> */}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
		marginVertical: 10,
		borderRadius: 5,
	},
	text: {
		color: colors.white,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 18,
	},
});

export default Button;
