import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/featchUser';
import mySaga from '../saga/mySaga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store and apply the saga middleware
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

// Run the saga
sagaMiddleware.run(mySaga);

export default store;