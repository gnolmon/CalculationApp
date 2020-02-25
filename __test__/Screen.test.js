import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store';
import { mapStateToProps, mapDispatchToProps } from '../src/Screen';
import Screen from '../src/Screen';

const mockStore = configureStore();

const initialState = {
    resultText: "",
    isEqualPress: false
}

describe('<Screen />', () => {
    let wrapper, store;

    beforeEach(() => {
        const initialState = {
            lastRolledNumber: 1
        };
        store = mockStore(initialState);
        wrapper = shallow(<Screen store={store} />);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<Screen store={store}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should call action NUMBER_PRESS when click number', () => {
        const dispatch = jest.fn();

        mapDispatchToProps(dispatch).buttonPress(1);
        expect(dispatch.mock.calls[0][0]).toEqual({ type: 'NUMBER_PRESS', payload: 1});
    });

    it('should call action OPERATOR_PRESS when click operator', () => {
        const dispatch = jest.fn();

        mapDispatchToProps(dispatch).operatorPress("+");
        expect(dispatch.mock.calls[0][0]).toEqual({ type: 'OPERATOR_PRESS', payload: "+"});
    });

});

