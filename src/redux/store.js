import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducers } from './';

const rootReducer = combineReducers({ ...reducers });

const withDevTools = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
});

const middlewares = applyMiddleware(thunk);

const composeEnhancers = withDevTools ? devTools : compose;

const enhancer = composeEnhancers(
  middlewares
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);

export default store;
