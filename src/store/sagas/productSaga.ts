import { call ,put, all, takeLatest } from 'redux-saga/effects';
import { getProductAction, setProductAction, setProductActionError } from '../actions';

function* fetchGetProduct() {
  try {
    const result = yield call(fetch, 'http://api.tvmaze.com/search/shows?q=stargate');

    if (result.ok) {
      const data = yield result.json();
      const parsedData = data.map((item) => ({...item.show}));
      yield put(setProductAction(parsedData));
    }
  } catch (err) {
    yield put(setProductActionError(err));
    console.log(err);
  }
}

export function* fetchGetProductFork() {
  yield takeLatest(getProductAction, fetchGetProduct);
}
