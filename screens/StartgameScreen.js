import { StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'

function StartgameScreen() {
    const [enteredNumber, setEnteredNumber] = useState('');

function numberInputHandler(enteredText){
    setEnteredNumber(enteredText);
}

function confirmInputHandler(enteredText){

}

    return (
        <View style={styles.inputcontainer}>
            <TextInput style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
               />
            <View style={styles.buttonscontainer}>
                <View style={styles.buttoncontainer}>
                   <PrimaryButton>Reset</PrimaryButton>  
                </View>
               <View style={styles.buttoncontainer}>
                   <PrimaryButton>Confirm</PrimaryButton>
               </View>
             
            </View>


        </View>
    )
}

export default StartgameScreen

const styles = StyleSheet.create({
    inputcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        marginTop: 100,
        borderRadius: 25,
        padding: 30,
        backgroundColor: '#4e0028',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 15,
        shadowOpacity: 0.35
    },
    numberInput: {
        height: 80,
        width: 185,
        font: 32,
        borderWidth: 0.5,
        padding: 15,
        borderColor: '#4e0028',
        borderBottomColor: '#ddb52f',
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center',
        alignItems: 'center',
        alignSelf: 'center'



    },
    buttonscontainer: {
        marginTop:10,
        flexDirection: 'row',
    },
    buttoncontainer: {
       flex:1,
    }
})