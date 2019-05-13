import React from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const { backgroundImage } = styles;

const Background = ({ children, style, imageSource }) => {
	return (
		<ImageBackground source={imageSource} style={[ backgroundImage, style ]}>
			{children}
		</ImageBackground>
	);
};
export default Background;
