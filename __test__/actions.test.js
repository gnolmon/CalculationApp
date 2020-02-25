import configureStore from 'redux-mock-store';
import {NUMBER_PRESS, OPERATOR_PRESS} from "./constants";

import {buttonPress, operatorPress} from '../src/actions';

const mockStore = configureStore();
const store = mockStore();

describe('actions', () => {
    it('should create an action when press number', () => {
        const value = 1
        const expectedAction = {
            type: NUMBER_PRESS,
            payload: value
        }
        expect(buttonPress(value)).toEqual(expectedAction)
    })

    it('should create an action when press operator', () => {
        const value = '*'
        const expectedAction = {
            type: OPERATOR_PRESS,
            payload: value
        }
        expect(operatorPress(value)).toEqual(expectedAction)
    })
})
