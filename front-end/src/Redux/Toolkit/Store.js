import React from 'react'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../Saga/ProfileSaga';
import ProfileSlice from './ProfileSlice';
const sagaMiddleware = createSagaMiddleware();


export const Store = configureStore({
    reducer:{
        profile:ProfileSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck: false,thunk:false}).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);