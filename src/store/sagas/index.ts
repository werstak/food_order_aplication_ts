import {all} from 'redux-saga/effects';
import authSaga from './auth';
import {fetchGetProductFork} from './productSaga';

export default function* rootSaga(): Generator {
  yield all([authSaga(), fetchGetProductFork()]);
}
