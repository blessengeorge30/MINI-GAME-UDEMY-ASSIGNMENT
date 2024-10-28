import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}


function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <View >
        <Title>Opponent's Guess </Title>
<NumberContainer>{currentGuess}</NumberContainer>
        <View>
          <Text style={{ color: '#fff', fontSize: 27 }}>Higher or Lower? </Text>
        </View>
      </View>


    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    // padding: 25,
  },
  title: {
    fontSize: 24,
    fontweight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 1.5,
    borderColor: '#fff',
    padding: 12




  }

}) 