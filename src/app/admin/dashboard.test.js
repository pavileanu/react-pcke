import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from './dashboard'

describe('dashboard', () => {
    it('should render', () => {
        const dashboard = shallow(<Dashboard />);
        expect(dashboard).toMatchSnapshot();
    })
});