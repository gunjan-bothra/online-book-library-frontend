import { takeEvery } from 'redux-saga/effects';
import { actionTypes } from '../constant/Constant';
import {
    doFetchBookList,
    addBookToLibrary,
    updateBookDetailsToLib
} from './BookLibrarySaga';

export function* watchBookLibrary() {
    yield takeEvery(actionTypes.FETCH_BOOK_LIST, doFetchBookList);
    yield takeEvery(actionTypes.ADD_BOOK_TO_LIBRARY, addBookToLibrary);
    yield takeEvery(actionTypes.UPDATE_BOOK_DETAILS, updateBookDetailsToLib);

}
