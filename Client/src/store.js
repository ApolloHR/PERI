import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

const middleware = applyMiddleware(promise(), createLogger(), thunk);

export default createStore(reducer, middleware);