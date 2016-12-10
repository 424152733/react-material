import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
import * as reducers from '../reducers';
let middlewares = [/*thunk*/sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  const logger = reduxLogger()
  middlewares = [...middlewares, logger];
}

const finalCreateStore = compose(
  applyMiddleware(...middlewares)
)(createStore);

function configureStore(initialState) {
  const reducer = combineReducers(reducers);
  const store = finalCreateStore(reducer, initialState);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      const nextReducers = combineReducers(nextReducer);
      store.replaceReducer(nextReducers);
    });
  }

  return store;
}
const store = configureStore()

export default store
