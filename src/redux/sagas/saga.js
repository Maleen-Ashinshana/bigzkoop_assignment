import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import {setPosts} from "../slice/postSlice.js";
import {setComments} from "../slice/commentSlice.js";
import {setAlbums} from "../slice/albumSlice.js";
import {setPhotos} from "../slice/photoSlice.js";
import {setUsers} from "../slice/userSclice.js";

function* fetchPost() {
    try {
        const posts = yield call(axios.get,"https://jsonplaceholder.typicode.com/posts")
        yield put(setPosts(posts.data))
        console.log("POST : "+posts.data)

    } catch (e) {
        yield put({ type: 'FETCH_POST_FAILED', message: e.message })
    }
}
function* fetchComment() {
    try {
        const comments = yield call(axios.get,"https://jsonplaceholder.typicode.com/comments")
        yield put(setComments(comments.data))
        console.log("COMMENTS : "+comments.data)

    } catch (e) {
        yield put({ type: 'FETCH_COMMENTS_FAILED', message: e.message })
    }
}
function* fetchAlbum() {
    try {
        const albums = yield call(axios.get,"https://jsonplaceholder.typicode.com/albums")
        yield put(setAlbums(albums.data))
        console.log("ALBUMS : "+albums.data)

    } catch (e) {
        yield put({ type: 'FETCH_ALBUMS_FAILED', message: e.message })
    }
}

function* fetchPhoto() {
    try {
        const photos = yield call(axios.get,"https://jsonplaceholder.typicode.com/photos")
        yield put(setPhotos(photos.data))
        console.log("PHOTOS : "+photos.data)

    } catch (e) {
        yield put({ type: 'FETCH_PHOTOS_FAILED', message: e.message })
    }
}
function* fetchUser() {
    try {
        const users = yield call(axios.get,"https://jsonplaceholder.typicode.com/users")
        yield put(setUsers(users.data))
        console.log("USERS : "+users.data)

    } catch (e) {
        yield put({ type: 'FETCH_USERS_FAILED', message: e.message })
    }
}


function* mySaga() {
    yield takeEvery('FETCH_POSTS_REQUESTED', fetchPost);
    yield takeEvery('FETCH_COMMENTS_REQUESTED', fetchComment);
    yield takeEvery('FETCH_ALBUMS_REQUESTED', fetchAlbum);
    yield takeEvery('FETCH_PHOTOS_REQUESTED', fetchPhoto);
    yield takeEvery('FETCH_USERS_REQUESTED', fetchUser);

}

export default mySaga