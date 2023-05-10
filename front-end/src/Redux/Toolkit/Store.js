import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware();


export default Store = configureStore({
    reducer:{

    },
    middleware:[sagaMiddleware]
});

sagaMiddleware.run();