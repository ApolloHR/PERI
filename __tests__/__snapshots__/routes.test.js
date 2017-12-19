import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow } from 'enzyme';

import Routes from '../../client/src/components/routes.jsx';



describe('>>>R O U T E S --- Test routes component', () => {

  it('renders without exploding', () => {
    expect(shallow(<Routes />).length).toEqual(1)
  });

});