import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Routes from '../../../Client/src/components/routes.jsx';

describe('>>>R O U T E S --- Snapshot', () => {
  it('+++capturing Snapshot from routes', () => {
    const renderedValue = renderer.create(<Routes/>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});