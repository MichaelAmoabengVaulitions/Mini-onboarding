import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CheckBox from 'react-native-check-box';

import Background from '../../components/Background';
import Button from '../../components/Button/';
import { styles } from './styles';
import { Images } from '../../utils/images';

export default class Goals extends Component {
	constructor(props) {
		super(props);
		this.state = {
			findWorkouts: false,
			unnecessaryWeight: false,
			birthPreparation: false,
			moreRelaxed: false
		};
	}

	handleNavigate = () => {
		this.props.navigation.navigate('DueDate', { goals: this.state });
	};

	render() {
		const {
			goalsContainer,
			checkBox,
			textContainer,
			textPrimary,
			textSecondary,
			textCheckbox,
			buttonContainer
		} = styles;

		return (
			<Background imageSource={Images.backgroundImage}>
				<View style={goalsContainer}>
					<View style={textContainer}>
						<Text style={textSecondary}>What are your goals ?</Text>
						<Text style={textPrimary}>Help us tailor and program you needs</Text>
					</View>

					<CheckBox
						checkBoxColor="#9ADCD7"
						style={checkBox}
						rightTextStyle={textCheckbox}
						rightText={'Find workouts for my pregnancy'}
						onClick={() => {
							this.setState({
								findWorkouts: !this.state.findWorkouts
							});
						}}
						isChecked={this.state.findWorkouts}
					/>
					<CheckBox
						checkBoxColor="#9ADCD7"
						style={styles.checkBox}
						rightTextStyle={textCheckbox}
						rightText={'Not to gain unnecessary weight'}
						onClick={() => {
							this.setState({
								unnecessaryWeight: !this.state.unnecessaryWeight
							});
						}}
						isChecked={this.state.unnecessaryWeight}
					/>
					<CheckBox
						checkBoxColor="#9ADCD7"
						style={checkBox}
						rightTextStyle={textCheckbox}
						rightText={'Prepare for birth'}
						onClick={() => {
							this.setState({
								birthPreparation: !this.state.birthPreparation
							});
						}}
						isChecked={this.state.birthPreparation}
					/>
					<CheckBox
						checkBoxColor="#9ADCD7"
						style={checkBox}
						rightTextStyle={textCheckbox}
						rightText={'Feel more relaxed'}
						onClick={() => {
							this.setState({
								moreRelaxed: !this.state.moreRelaxed
							});
						}}
						isChecked={this.state.moreRelaxed}
					/>
					<View style={styles.buttonContainer}>
						<Button onPress={this.handleNavigate}>continue</Button>
					</View>
				</View>
			</Background>
		);
	}
}
