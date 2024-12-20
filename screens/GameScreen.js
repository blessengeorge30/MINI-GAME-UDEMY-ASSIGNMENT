import { StyleSheet, View, Alert,Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';



function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(
    1,
    100,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds,setGuessrounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);


  function nextGuessHandler(direction) { //lower or greater
    if ((direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert('Don\'t lie!', 'you are giving me the wrong input! ', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary)
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessrounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;


  return (
    <View >
      <View style={styles.screen}>
        <Title>Opponent's Guess </Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <InstructionText style={styles.InstructionText}>Higher or Lower? </InstructionText>
          <View style={styles.buttonscontainer}>
            <View style={styles.buttoncontainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <Ionicons name="remove" size={24} color="white" />
              </PrimaryButton>
            </View>
            <View style={styles.buttoncontainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                <Ionicons name="add-outline" size={24} color="white" />
              </PrimaryButton>

            </View>
          </View>

        </Card>

        <View style={styles.Listcontainer}>
          {/* {guessRounds.map(guessRound => <Text style={{color:'white'}} key={guessRound}>{guessRound}</Text>)} */}
          <FlatList 
          data={guessRounds} 
          renderItem={(itemData) => <GuessLogItem roundNumber={itemData.index} guess={itemData.item}/>}
          keyExtractor={(item) => item}/>
        </View>
      </View>


    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({

  screen: {
    marginTop: 40,
    alignItems:'center'
  },
  title: {
    fontSize: 24,
    fontweight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 1.5,
    borderColor: '#fff',
    padding: 12
  },
  buttonscontainer: {
    flexDirection: 'row',
  },
  buttoncontainer: {
    flex: 1,

  },
  InstructionText: {
    marginBottom: 16,

  },
  Listcontainer: {
    // flex:1,
    padding: 16
  },

}) 