import { call, put, takeEvery } from "redux-saga/effects"
import { addProfile, deleteProfile, getProfile, updateProfile } from "../../Toolkit/ProfileSlice"
import { deleteProfileDataAPI, getProfileDataAPI, postProfileDataAPI, updateProfileDataAPI } from "./Api"
import { ADD_DATA, DELETE_DATA, GET_DATA, UPDATE_DATA } from "./ActionTypes"

export function* getProfileSaga(){
    const {data} = yield getProfileDataAPI()
    yield put(getProfile(data))
}
export function* addProfileSaga(action){
   const {data} = yield call(postProfileDataAPI,action.formData)
   console.log('returned',data)
    yield put(addProfile(data))
}
export function* updateProfileSaga (action){
    const {data} = yield call(updateProfileDataAPI, action.id )
    yield put(updateProfile(data))
}
export function* deleteProfileSaga (action){
    const {data} = yield call(deleteProfileDataAPI, action.payload)
    yield put(deleteProfile(data))
}

export function* watchProfileAsync (){
    yield takeEvery(ADD_DATA,addProfileSaga);
    yield takeEvery(GET_DATA,getProfileSaga);
    yield takeEvery(UPDATE_DATA,updateProfileSaga);
    yield takeEvery(DELETE_DATA,deleteProfileSaga);
}