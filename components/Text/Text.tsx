import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface TextProps{
	style? :object,
	children: React.ReactNode
}

const Texti = ({style, children}: TextProps) => {
	return (
		<View>
			<Text style={[styles.text, style]}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 16
	}
})

export default Texti;
