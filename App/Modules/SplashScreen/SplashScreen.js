import React from 'react'
import { View, Text } from 'react-native'

export default class SplashScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerMode: 'none',
  });
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Text style={{ fontSize: 20 }}>Splash Screen</Text>
      </View>
    )
  }
}
