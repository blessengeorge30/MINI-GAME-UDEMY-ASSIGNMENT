import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,SafeAreaView } from 'react-native';

import StartgameScreen from './screens/StartgameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';


export default function App() {
 const [userNumber,setUserNumber] = useState();

 function pickedNumberHandler(pickedNumber){
  setUserNumber(pickedNumber);
 }

 let screen = <StartgameScreen onPickNumber={pickedNumberHandler} />
 if (userNumber){
  screen = <GameScreen/>
 }
  return (
    <View style={styles.rootscreen}>
      <ImageBackground source={require('./assets/images/dices.jpg')} 
      resizeMode='cover' 
      style={styles.rootscreen}
      imageStyle={styles.backgroundimg} >
        <SafeAreaView>
        {screen}
        </SafeAreaView>
       
      </ImageBackground>

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
  },
  backgroundimg:{
    opacity: 0.99
  }
 
});
