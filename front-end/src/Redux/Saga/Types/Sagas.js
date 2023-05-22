import { call, put, takeEvery } from "redux-saga/effects";
import {
    addError,
  addProfile,
  deleteProfile,
  getProfile,
  loginUser,
  updateProfile,
} from "../../Toolkit/ProfileSlice";
import {
  Login,
  LoginAPI,
  deleteProfileDataAPI,
  getProfileDataAPI,
  postProfileDataAPI,
  updateProfileDataAPI,
} from "./Api";
import { ADD_DATA, DELETE_DATA, GET_DATA, LOGIN, UPDATE_DATA } from "./ActionTypes";

export function* getProfileSaga() {
  const { data } = yield getProfileDataAPI();
  yield put(getProfile(data));
}
export function* addProfileSaga(action) {
  const { data } = yield call(postProfileDataAPI, action.formData);
  console.log("returned", data);
  yield put(addProfile(data));
}
export function* updateProfileSaga(action) {
  const { data } = yield call(updateProfileDataAPI, action.id);
  yield put(updateProfile(data));
}
export function* deleteProfileSaga(action) {
  const { data } = yield call(deleteProfileDataAPI, action.payload);
  yield put(deleteProfile(data));
}
export function* loginSaga(action) {
  try {
    const { data } = yield call(LoginAPI, action.formData);
    yield put(loginUser(data));
  } catch (error) {
    console.log('in saa err',error.response.data)
    yield put(addError(error.response.data));
  }
}

export function* watchProfileAsync() {
  yield takeEvery(ADD_DATA, addProfileSaga);
  yield takeEvery(GET_DATA, getProfileSaga);
  yield takeEvery(UPDATE_DATA, updateProfileSaga);
  yield takeEvery(DELETE_DATA, deleteProfileSaga);
  yield takeEvery(LOGIN, loginSaga);

}
