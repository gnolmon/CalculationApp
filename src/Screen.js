import React from 'react';
import { Text, View, TouchableHighlight, SafeAreaView} from 'react-native';
import {styles} from "./styles";
import Button from "./Button";
import {buttonTitles, operatorTitles} from "./constants";
import {operatorPress, buttonPress} from './actions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
class Screen extends  React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.rootContainer}>
                <View style={styles.displayContainer}>
                    <Text style={styles.displayText}>{this.props.calculation.resultText}</Text>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.numberContainer}>
                        {buttonTitles.map((values, index) => {
                            return (
                                <View style={styles.inputRow} key={`number${index}`}>
                                    {values.map((value, idx) => {
                                        return (
                                            <Button value={value} onPress={() => this.props.buttonPress(value)} key={`btnNumber${idx}`}/>
                                        )
                                    })}
                                </View>
                            );
                        })}
                    </View>
                    <View style={styles.operatorContainer}>
                        {operatorTitles.map((value, index) => {
                            return (
                                <View style={styles.inputRow} key={`operator${index}`}>
                                    <Button value={value} onPress={() => this.props.operatorPress(value)} key={`btnOperator${index}`}/>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export const mapStateToProps = state => ({
    calculation: state
});

export const mapDispatchToProps = dispatch => {
    return bindActionCreators({operatorPress, buttonPress}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
