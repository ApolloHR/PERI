import { login } from '../../../Client/src/actions/tripsActions.js';

describe('>>>A C T I O N --- Test tripsActions', () => {
  it('+++ actionCreator checks login status', () => {
    const log = login(true);
    expect(log).toEqual({type: 'LOG_IN', payload: true});
  });

  it('+++ actionCreator checks login status to be false', () => {
    const log = login(false);
    expect(log).toEqual({type: 'LOG_IN', payload: false});
  });
});