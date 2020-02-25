import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    displayContainer: {
        flex: 5,
        backgroundColor: '#fff',
        flexDirection: 'column-reverse',
    },
    displayText: {
        color: 'black',
        fontSize: 64,
        textAlign: 'right',
        padding: 15
    },
    inputContainer: {
        flex: 5,
        marginRight: 8,
        marginLeft: 8,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    numberContainer: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    operatorContainer: {
        flex: 1
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
        borderRadius: 8,
        backgroundColor: '#d6d6d6'
    },
    inputButtonHighlighted: {
        backgroundColor: '#193441'
    },
    inputButtonText: {
        fontSize: 34,
        color: 'black'
    },
});
