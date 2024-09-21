// sagas.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUser(action) {
  try {
    const user = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${action.payload}`);
    yield put({ type: 'FETCH_USER_SUCCESS', user: user.data });
  } catch (e) {
    yield put({ type: 'FETCH_USER_FAILED', message: e.message });
  }
}

function* mySaga() {
  yield takeEvery('FETCH_USER', fetchUser);
}

export default mySaga;
