import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';

const Button = ({ onPress, children, style }) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableHighlight onPress={onPress} style={[ buttonStyle, style ]}>
			<Text style={textStyle}>{children}</Text>
		</TouchableHighlight>
	);
};

export default Button;
