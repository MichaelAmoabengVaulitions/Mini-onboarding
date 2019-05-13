import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

import Background from '../../components/Background';
import Button from '../../components/Button/';
import { Images } from '../../utils/images';
import { styles } from './styles';

export default class ActivityLevel extends Component {
	state = {
		sliderValue: 0
	};

	onBackPressed = () => {
		this.props.navigation.goBack();
	};

	onNavigate = () => {
		const goals = this.props.navigation.getParam('goals');
		const dueDate = this.props.navigation.getParam('dueDate');
		this.props.navigation.navigate('Success', {
			goals: goals,
			dueDate: dueDate,
			activityLevel: this.state.sliderValue
		});
	};

	renderActivity = () => {
		const { sliderValue } = this.state;
		const { textPrimary } = styles;

		if (sliderValue === 1) {
			return <Text style={textPrimary}>I don't exercise at all </Text>;
		} else if (sliderValue === 2) {
			return <Text style={textPrimary}>I rarely exercise </Text>;
		} else if (sliderValue === 3) {
			return <Text style={textPrimary}>I sometimes exercise </Text>;
		} else if (sliderValue === 4) {
			return <Text style={textPrimary}>I regularly exercise </Text>;
		} else if (sliderValue === 5) {
			return <Text style={textPrimary}>I often exercise </Text>;
		} else {
			return null;
		}
	};

	render() {
		const goals = this.props.navigation.getParam('goals');
		const dueDate = this.props.navigation.getParam('dueDate');
		const { image, activityButtonContainer, textSecondary, slider, buttonGreen, activityContainer } = styles;

		return (
			<Background imageSource={Images.cloud}>
				<TouchableOpacity onPress={this.onBackPressed}>
					<Image source={Images.backButton} style={image} />
				</TouchableOpacity>

				<View style={activityContainer}>
					<Text style={textSecondary}>Select your activity rate</Text>
					<Slider
						maximumValue={5}
						minimumValue={0}
						minimumTrackTintColor="#00B2A6"
						maximumTrackTintColor="#DEF4F2"
						thumbImage={Images.thumb}
						trackImage={Images.track}
						style={slider}
						step={1}
						value={this.state.sliderValue}
						onValueChange={(sliderValue) => this.setState({ sliderValue })}
					/>

					{this.renderActivity()}

					<View style={activityButtonContainer}>
						<Button style={buttonGreen} onPress={this.onNavigate}>
							continue
						</Button>
					</View>
				</View>
			</Background>
		);
	}
}
