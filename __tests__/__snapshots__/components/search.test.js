import searchReducer from '../../../Client/src/reducers/searchReducer.js';
import searchInput from '../../../Client/src/actions/searchActions.js';

// What kind of object will the reducer return
// take in a search value and return an object with the new search value

describe('>>>S E A R C H --- Test reducers & actions', () => {
  it('+++ reducer for SEARCH_INPUT', () => {
    let state = { search: '' };
    state = searchReducer(state, { type: 'SEARCH_INPUT', payload: 'Austrailia' });
    expect(state).toEqual({ search: 'Austrailia' });
  });

  it('+++ action for SEARCH_INPUT', () => {
    // what is an action?
    let search = searchInput('New Zealand');
    expect(search).toEqual({ type: 'SEARCH_INPUT', payload: 'New Zealand'});
  });

});