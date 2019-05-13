import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Background from '../../components/Background';
import { Images } from '../../utils/images';
import { styles } from './styles';

export default class Success extends Component {
	renderActivity = () => {
		const activityLevel = this.props.navigation.getParam('activityLevel');
		const { textPrimary } = styles;
		if (activityLevel === 1) {
			return <Text style={textPrimary}>I don't exercise at all </Text>;
		} else if (activityLevel === 2) {
			return <Text style={textPrimary}>I rarely exercise </Text>;
		} else if (activityLevel === 3) {
			return <Text style={textPrimary}>I sometimes exercise </Text>;
		} else if (activityLevel === 4) {
			return <Text style={textPrimary}>I regularly exercise </Text>;
		} else if (activityLevel === 5) {
			return <Text style={textPrimary}>I often exercise </Text>;
		} else {
			return null;
		}
	};

	render() {
		const goals = this.props.navigation.getParam('goals');
		const dueDate = this.props.navigation.getParam('dueDate');
		const { textPrimary, textSecondary, successContainer } = styles;

		return (
			<Background imageSource={Images.cloud} style={successContainer}>
				<Text style={textSecondary}>Summary</Text>
				<View>
					<Text style={textSecondary}>Goals</Text>
					<Text style={textPrimary}>{goals.findWorkouts ? 'Find workouts for my pregnancy' : null}</Text>
					<Text style={textPrimary}>{goals.unnecessaryWeight ? 'Not gain unnecessary weight' : null}</Text>
					<Text style={textPrimary}>{goals.birthPreparation ? 'Prepare for birth' : null}</Text>
					<Text style={textPrimary}>{goals.moreRelaxed ? 'Feel more relaxed' : null}</Text>
					<Text style={textSecondary}>Due Date</Text>
					<Text style={textPrimary}>{dueDate}</Text>
					<Text style={textSecondary}>Activity Level</Text>
					{this.renderActivity()}
				</View>
			</Background>
		);
	}
}
