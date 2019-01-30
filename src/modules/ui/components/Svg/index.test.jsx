import React from 'react';
import {SvgIcon} from '.';
import {shallow} from 'enzyme';

describe('<Svg />', () => {
    it('should render', () => {
        const element = shallow(<SvgIcon src={{id: 'icon-name'}} />);
        expect(element.debug()).toMatchSnapshot();
    });
});
