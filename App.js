import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,SafeAreaView } from 'react-native';
import { useState } from 'react';
import StartgameScreen from './screens/StartgameScreen';
import GameOverScreen from './screens/GameOverScreen'
import GameScreen from './screens/GameScreen';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';

export default function App() {
 const [userNumber,setUserNumber] = useState();
 const [gameIsOver,setGameIsOver] = useState(true);
 const [guessRounds, setGuessrounds] = useState(0)

const [fontsLoaded] = useFonts({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
});

if (!fontsLoaded) {
  return <AppLoading/>
}

 function pickedNumberHandler(pickedNumber){
  setUserNumber(pickedNumber);
  setGameIsOver(false);
 } 
 
 function gameOverHandler(numberOfRounds) {
  setGameIsOver(true);
  setGuessrounds(numberOfRounds)
 }

function startNewGameHandler() {
    setUserNumber(null);
    setGuessrounds(0);

}

 let screen = <StartgameScreen onPickNumber={pickedNumberHandler} />

 if (userNumber){
  screen = (
  <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  );
 }

 if (gameIsOver && userNumber){
  screen = (<GameOverScreen 
  userNumber={userNumber} 
  roundsNumber={guessRounds} 
  onStartNewGame={startNewGameHandler} />
  );
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
