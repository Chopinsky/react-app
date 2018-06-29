import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';

import ReduxThunk from 'redux-thunk';
import { reducer } from './reducer';

const middleware = compose(applyMiddleware(
  ReduxThunk
));

const composedMiddleware = middleware(createStore);
const rootReducer = combineReducers({
  app: reducer,
});

export default function configureStore(initState = {}) {
  return composedMiddleware(rootReducer, initState);
}