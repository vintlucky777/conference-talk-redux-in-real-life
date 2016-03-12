//This file merely configures the store for hot reloading.
//This boilerplate file is likely to be the same for each project that uses Redux.
//With Redux, the actual stores are in /reducers.

import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import _ from 'lodash';

import {hydrate} from '../actions';

const history = {log: [], step: 0};

const logger = ({getState}) => (next) => (action) => {
  console.log('will dispatch', action)

  // Call the next dispatch method in the middleware chain.
  let returnValue = next(action);
  const nextState = getState();

  console.log('state after dispatch', nextState)

  if (action.type !== 'HYDRATE') {
    history.log = [..._.take(history.log, history.step + 1), {action, state: nextState}];
    history.step = history.log.length;
  }

  // This will likely be the action itself, unless
  // a middleware further in chain changed it.
  return returnValue;
};

export default function configureStore(initialState) {
  let store;
  if (window.devToolsExtension) { //Enable Redux devtools if the extension is installed in developer's browser
    store = window.devToolsExtension()(createStore)(rootReducer, initialState, applyMiddleware(logger));
  } else {
    store = createStore(rootReducer, initialState, applyMiddleware(logger));
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  store.history = history;
  store.rewind = (step) => {
    if (!_.isFinite(step) || step < 0 || step > (_.size(store.history.log) - 1)) {
      return;
    }

    const nextState = _.at(history.log, step)[0].state;
    store.history.step = step;

    store.dispatch(hydrate(nextState));
  };

  store.dispatch({type: 'INIT'});

  return store;
}
