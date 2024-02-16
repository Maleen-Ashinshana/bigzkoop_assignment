import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import {setPosts} from "../slice/postSlice.js";
import {setComments} from "../slice/commentSlice.js";

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


function* mySaga() {
    yield takeEvery('FETCH_POSTS_REQUESTED', fetchPost)
    yield takeEvery('FETCH_COMMENTS_REQUESTED', fetchComment)

}

export default mySaga