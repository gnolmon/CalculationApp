import {NUMBER_PRESS, OPERATOR_PRESS} from "./constants";

export const buttonPress = (value) => ({
    type: NUMBER_PRESS,
    payload: value
})

export const operatorPress = (value) => ({
    type: OPERATOR_PRESS,
    payload: value
})
