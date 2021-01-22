import {put, all, takeLatest} from 'redux-saga/effects';
import {signInAction, didSignInAction} from '../actions';
import ISignInAction from '../actions/auth/ISignInAction';

function* signInSaga({payload: {email}}: {payload: ISignInAction}): Generator {
  yield put(
    didSignInAction({
      email,
      accessToken: 'mock',
      refreshToken: 'mock',
      firstName: 'Test',
      lastName: 'Test',
    }),
  );
}

export default function* authSaga(): Generator {
  yield all([takeLatest(signInAction, signInSaga)]);
}
