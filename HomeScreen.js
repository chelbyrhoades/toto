import React from 'react';
import { Button, Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
const data = [
  {
    title: 'Lunch Appointment',
    subtitle: 'With Harry',
    start: new Date(2018, 11, 2, 13, 20),
    end: new Date(2018, 11, 2, 14, 20),
    color: '#390099',
  }
]
class HomeScreen extends React.Component {
  state = {
		location: null
	};

	findCoordinates = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
				const location = JSON.stringify(position);

				this.setState({ location });
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	};
  render() {
    return (
      <View style={styles.container}>
        <Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
				<TouchableOpacity onPress={this.findCoordinates}>
					<Text style={styles.welcome}>Find My Coords?</Text>
					<Text>Location: {this.state.location}</Text>
				</TouchableOpacity>
        <Text>You have (undefined) friends.</Text>
        <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;