import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import ServiceEngine from '../services/ServiceEngine';

//Fetch book list
export function* doFetchBookList() {
    let Service = new ServiceEngine('http://localhost:3001/bookList');
    try {
        let response = yield Service.doAxiosGet();
        if (response && response.data) {
            yield put(actions.fetchBookListSuccess(response.data.list));
        }
    }
    catch (error) {
        console.log(error);
    }
}

//Add book to library
export function* addBookToLibrary(action) {
    let Service = new ServiceEngine('http://localhost:3001/bookList');
    try {
        let response = yield Service.doAxiosPost(action.payload);
        if (response) {
            yield put(actions.fetchBookList());
        }
    }
    catch (error) {
        console.log(error);
    }
}

// Update book details
export function* updateBookDetailsToLib(action) {
    let Service = new ServiceEngine(`http://localhost:3001/bookList/${action.id}`);
    try {
        let response = yield Service.doAxiosPut(action.payload);
        if (response) {
            yield put(actions.fetchBookList());
        }
    }
    catch (error) {
        console.log(error);
    }
}

