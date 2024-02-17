import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import {postsSlice} from "./slice/postSlice.js";
import mySaga from "./sagas/saga.js";
import {commentsSlice} from "./slice/commentSlice.js";
import {albumsSlice} from "./slice/albumSlice.js";
import {photosSlice} from "./slice/photoSlice.js";
import {usersSlice} from "./slice/userSclice.js";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
        comments: commentsSlice.reducer,
        albums: albumsSlice.reducer,
        photos:photosSlice.reducer,
        users:usersSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(mySaga)
