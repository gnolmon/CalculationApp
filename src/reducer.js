import {NUMBER_PRESS, OPERATOR_PRESS} from "./constants";
import {operatorTitles} from "./constants";

const initialState = {
    resultText: "",
    isEqualPress: false
}

function checkIncludeOperator(array) {
    let result = false
    operatorTitles.forEach(item => {
        if (array.includes(item)) {
            result = true
        }
    })
    return result
}

const operatorAtLast = /.[\+\-\*\/]$/g

export default function (state = initialState, action) {
    switch (action.type) {
        case NUMBER_PRESS:
            if (action.payload == 'C') {
                return { resultText: '', isEqualPress: false}
            }
            return { resultText: state.isEqualPress ? action.payload : state.resultText.toString() + action.payload, isEqualPress: false}
        case OPERATOR_PRESS:
            const charArr = state.resultText.toString().split('')

            if (charArr.length == 0) return state

            if (action.payload == '=') {
                if (operatorAtLast.test(state.resultText)) {
                    return {resultText: eval(state.resultText.slice(0, charArr.length - 1)), isEqualPress: checkIncludeOperator(charArr) }
                }
                return {resultText: eval(state.resultText), isEqualPress: checkIncludeOperator(charArr) }
            }

            if (operatorAtLast.test(state.resultText)) {
                charArr[charArr.length - 1] = action.payload
                return { ...state, resultText: charArr.join('')}
            }

            return {resultText: state.resultText + action.payload, isEqualPress: false}
        default:
            return state;
    }
}
