import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import {postsSlice} from "./slice/postSlice.js";
import mySaga from "./sagas/saga.js";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer:{
        posts:postsSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(mySaga)
