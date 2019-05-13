import { StyleSheet } from 'react-native';

import { isAndroid } from '../../utils/platform';

export const styles = StyleSheet.create({
	textStyle: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 32,
		fontFamily: 'Avenir',
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		justifyContent: 'center',
		backgroundColor: '#d9d9d9',
		alignItems: 'center',
		height: isAndroid ? 50 : 80
	}
});
