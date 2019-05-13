import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';

import Background from '../../components/Background';
import Button from '../../components/Button/';
import { Images } from '../../utils/images';
import { isAndroid } from '../../utils/platform';
import { styles } from './styles';

const minimumDate = moment().format('DD/MM/YYYY');
const maximumDate = moment().add(9, 'months').format('DD/MM/YYYY');

export default class DueDate extends Component {
	constructor(props) {
		super(props);

		this.state = { date: '' };
	}

	handleNavigate = () => {
		const goals = this.props.navigation.getParam('goals');
		this.props.navigation.navigate('ActivityLevel', { goals: goals, dueDate: this.state.date });
	};

	onBackPressed = () => {
		this.props.navigation.goBack();
	};

	render() {
		const { image, dueDateContainer, textPrimary, buttonContainer, buttonGreen } = styles;

		return (
			<Background imageSource={Images.backgroundImage}>
				<TouchableOpacity onPress={this.onBackPressed}>
					<Image source={Images.backButton} style={image} />
				</TouchableOpacity>
				<View style={dueDateContainer}>
					<Text style={[ textPrimary, { marginBottom: 80 } ]}>Select a due date</Text>
					<DatePicker
						style={{ width: 200 }}
						customStyles={{
							dateInput: {
								marginBottom: isAndroid ? 10 : 100
							}
						}}
						date={this.state.date} //initial date from state
						mode="date" //The enum of date, datetime and time
						placeholder="DD/MM/YY"
						format="DD-MM-YYYY"
						minDate={minimumDate}
						maxDate={maximumDate}
						confirmBtnText="Confirm"
						cancelBtnText="Cancel"
						showIcon={isAndroid ? true : false}
						onDateChange={(date) => {
							this.setState({ date: date });
						}}
					/>

					<View style={buttonContainer}>
						<Button style={buttonGreen} onPress={this.handleNavigate}>
							Continue
						</Button>
					</View>
				</View>
			</Background>
		);
	}
}
