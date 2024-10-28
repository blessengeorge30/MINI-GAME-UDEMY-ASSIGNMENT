import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import StartgameScreen from './screens/StartgameScreen';


export default function App() {
  return (
    <View style={styles.rootscreen}>
      <StartgameScreen />
    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootscreen: {
    flex: 1,
    backgroundColor: '#ddb52f',
  }
});
