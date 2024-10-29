import { View,Text, StyleSheet } from "react-native";
import Colors from "../../constants /colors";

function instructionText ({children, style}) {
    return(
        <Text style={[styles.instructiontext, style]}>{children} </Text>
    )
}

export default instructionText;

const styles = StyleSheet.create({
    instructiontext:{
        fontSize:22,
        color:Colors.accentcolor100
    },
})