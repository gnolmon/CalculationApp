import React from 'react'
import {styles} from "./styles";
import {Text, TouchableOpacity} from "react-native";

function Button({value, onPress}) {
    return (
        <TouchableOpacity style={styles.inputButton} onPress={onPress}>
            <Text style={styles.inputButtonText}>{value}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(Button)
