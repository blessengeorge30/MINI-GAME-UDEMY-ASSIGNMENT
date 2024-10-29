import { StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import { useState } from 'react'
import React from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants /colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';


function StartgameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Please enter a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return; // Ensures the function exits here if the input is invalid
        }

        onPickNumber(chosenNumber);

    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    return (


        <View style={styles.rootcontainer}>
            <Title>Guess the Number </Title>
         <Card>
            <InstructionText>Enter a Number </InstructionText>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonscontainer}>
                <View style={styles.buttoncontainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttoncontainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
            </Card>
        </View>
        
    );
}

export default StartgameScreen;

const styles = StyleSheet.create({
    rootcontainer:{
        // flex: 1,
        marginTop:100,
        alignItems:'center'
    },
    instructiontext:{
        fontSize:20,
        color:Colors.accentcolor100
    },
    
    numberInput: {
        height: 80,
        width: 185,
        borderWidth: 0.5,
        padding: 15,
        borderColor: Colors.primary600,
        borderBottomColor: Colors.accentcolor100,
        color: Colors.accentcolor100,
        marginVertical: 8,
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center',
    },
    buttonscontainer: {
        marginTop: 10,
        flexDirection: 'row',
    },
    buttoncontainer: {
        flex: 1,
       
    }
});
