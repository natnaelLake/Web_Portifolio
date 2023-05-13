import {call,put,takeEvery,fork,all, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import { getProfile } from '../Toolkit/ProfileSlice';
import { watchProfileAsync } from './Types/Sagas';


export function* rootSaga(){
  yield all([
    watchProfileAsync()
  ])
}


// function* fetchGetData(){
//   const {data} = yield call(()=>axios.get('http://localhost:5500/getData'))
//   // console.log(data);
//   yield put(getProfile(data))
// }
// function* getDataSaga(){
//   yield takeLatest(getProfile.type,fetchGetData)
// }

// export default getDataSaga;