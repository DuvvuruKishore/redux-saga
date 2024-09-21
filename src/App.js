
import React from 'react';
import { Provider} from 'react-redux';
import store from './redux-saga/store/store';
import './App.css';
import UserComponent from './components/UserComponent';


function App() {
  return (
    <Provider store={store}>
    <UserComponent />
  </Provider>
  );
}

export default App;
