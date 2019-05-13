import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	// common styles
	textPrimary: {
		textAlign: 'center',
		alignSelf: 'stretch',
		color: '#666666',
		fontSize: 18,
		fontFamily: 'Avenir',
		fontWeight: '500',
		marginBottom: 20
	},
	textSecondary: {
		textAlign: 'center',
		color: '#666666',
		fontSize: 24,
		fontFamily: 'Avenir',
		fontWeight: '600',
		paddingTop: 10
	},
	textContainer: {
		alignContent: 'center',
		marginBottom: 10
	},
	buttonContainer: {
		position: 'absolute',
		bottom: 0,
		width: '100%'
	},
	buttonGreen: {
		backgroundColor: '#9ADCD7'
	},
	image: {
		height: 24,
		width: 24,
		top: 30,
		left: 20,
		resizeMode: 'cover'
	},
	// Goals styles
	goalsContainer: {
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		bottom: 0,
		position: 'absolute',
		width: '100%',
		height: 400
	},

	//checkbox styles
	textCheckbox: {
		alignSelf: 'stretch',
		color: '#666666',
		fontSize: 18,
		fontFamily: 'Avenir',
		fontWeight: '500'
	},
	checkBox: {
		marginBottom: 30,
		paddingHorizontal: 28
	},
	// Due date styles
	dueDateContainer: {
		bottom: 0,
		position: 'absolute',
		width: '100%',
		height: 260,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	// Success styles
	successContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	//Activity styles
	activityContainer: {
		flex: 1,
		justifyContent: 'center',
		padding: 20
	},
	sliderContainer: {
		justifyContent: 'center'
	},
	thumb: {
		height: 40,
		width: 40,
		resizeMode: 'cover'
	},
	slider: {
		marginBottom: 180,
		marginTop: 160,
		transform: [ { rotate: '-90deg' } ]
	},
	activityButtonContainer: {
		position: 'absolute',
		bottom: 0,
		width: 378
	}
});
