import { View,Text, StyleSheet } from "react-native";
import Colors from "../../constants /colors";

function instructionText ({children}) {
    return(
        <Text style={styles.instructiontext}>{children} </Text>
    )
}

export default instructionText;

const styles = StyleSheet.create({
    instructiontext:{
        fontSize:20,
        color:Colors.accentcolor100
    },
})