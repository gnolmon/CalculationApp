import React from 'react';
import renderer from 'react-test-renderer';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });

import App from './App';

describe('<App />', () => {
    it('has 2 child', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree.children.length).toBe(2);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('App test Enzyme', () => {
        const snap = shallow(
            <App />
        )
        expect(snap).toMatchSnapshot()
    })
});

