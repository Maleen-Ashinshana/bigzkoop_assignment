import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import {postsSlice} from "./slice/postSlice.js";
import mySaga from "./sagas/saga.js";
import {commentsSlice} from "./slice/commentSlice.js";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
        comments: commentsSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(mySaga)
