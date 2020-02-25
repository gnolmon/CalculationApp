import {NUMBER_PRESS, OPERATOR_PRESS} from "./constants";
import reducer from "../src/reducer";

describe('calculation reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            resultText: '',
            isEqualPress: false
        })
    })

    it('should delete when click button C', () => {
        const state = {
            resultText: "1+2-3*4",
            isEqualPress: false
        }

        expect(reducer(state, {type: NUMBER_PRESS, payload: 'C'})).toEqual({
            resultText: '',
            isEqualPress: false
        })
    })

    it('should not return when click operator and not input number', () => {
        const state = {
            resultText: '',
            isEqualPress: false
        }

        expect(reducer(state, {type: OPERATOR_PRESS, payload: '+'})).toEqual({
            resultText: '',
            isEqualPress: false
        })
    })

    it('should return result when click =', () => {
        const state = {
            resultText: '1+2-3*4',
            isEqualPress: false
        }

        expect(reducer(state, {type: OPERATOR_PRESS, payload: '='})).toEqual({
            resultText: -9,
            isEqualPress: true
        })
    })

    it('should return result when click = but have last operator', () => {
        const state = {
            resultText: '1+2-3*4+',
            isEqualPress: false
        }

        expect(reducer(state, {type: OPERATOR_PRESS, payload: '='})).toEqual({
            resultText: -9,
            isEqualPress: true
        })
    })

    it('should return new operation when click number after get result', () => {
        const state = {
            resultText: -9,
            isEqualPress: true
        }

        expect(reducer(state, {type: NUMBER_PRESS, payload: 1})).toEqual({
            resultText: 1,
            isEqualPress: false
        })
    })

    it('should return new operation when click operator', () => {
        const state = {
            resultText: '1+2-3',
            isEqualPress: false
        }

        expect(reducer(state, {type: OPERATOR_PRESS, payload: '+'})).toEqual({
            resultText: '1+2-3+',
            isEqualPress: false
        })
    })

    it('should return new operation when click number', () => {
        const state = {
            resultText: '1+2-3+',
            isEqualPress: false
        }

        expect(reducer(state, {type: NUMBER_PRESS, payload: '4'})).toEqual({
            resultText: '1+2-3+4',
            isEqualPress: false
        })
    })

    it('should use the last one operator when user input multiple operator', () => {
        const state = {
            resultText: '1+2-3-',
            isEqualPress: false
        }

        expect(reducer(state, {type: OPERATOR_PRESS, payload: '+'})).toEqual({
            resultText: '1+2-3+',
            isEqualPress: false
        })
    })
})
