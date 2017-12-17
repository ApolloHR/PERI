import React from 'react';
import renderer from 'react-test-renderer';
import Nav from '../../client/src/components/nav.jsx';
import { MemoryRouter } from 'react-router';
import { Link } from 'react-router-dom';



it('renders correctly', () => {
  const tree = renderer
    .create(<MemoryRouter>
      <Link to="/" class="has-text-grey-dark"activeClassName="active" > Home </Link>
    </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

