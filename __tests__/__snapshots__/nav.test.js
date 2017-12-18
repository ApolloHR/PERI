import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
import Nav from '../../client/src/components/nav.jsx';
import { MemoryRouter } from 'react-router';
import { Link } from 'react-router-dom';


describe('>>>N A V --- Test nav component', () => {

  it('renders home link', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Link to="/" class="has-text-grey-dark"activeClassName="active" > Home </Link>
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
  });

  it('renders Build Trip link', () => {
  const tree = renderer
    .create(<MemoryRouter>
      <Link to="/buildTrip" class="has-text-grey-dark"activeClassName="active" > Build Trip </Link>
    </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });

  it('renders Cart link', () => {
  const tree = renderer
    .create(<MemoryRouter>
      <Link to="/cart" class="has-text-grey-dark"activeClassName="active" > Cart </Link>
    </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });

  it('renders G-login link', () => {
  const tree = renderer
    .create(<MemoryRouter>
      <Link to="/auth/google" class="has-text-grey-dark"activeClassName="active" > G-login </Link>
    </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });

  it('renders FB-Login link', () => {
  const tree = renderer
    .create(<MemoryRouter>
      <Link to="/auth/facebook" class="has-text-grey-dark"activeClassName="active" > FB-login </Link>
    </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
});