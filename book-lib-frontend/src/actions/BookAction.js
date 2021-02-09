import { actionTypes } from '../constant/Constant';

export const fetchBookList = () => {
    return {
        type: actionTypes.FETCH_BOOK_LIST,
    };
};

export const fetchBookListSuccess = (data) => {
    return {
        type: actionTypes.FETCH_BOOK_LIST_SUCCESS,
        payload: data
    };
};


export const addBookToLib = (data) => {
    return {
        type: actionTypes.ADD_BOOK_TO_LIBRARY,
        payload: data
    };
};

export const updateBookDetails = (data, id) => {
    return {
        type: actionTypes.UPDATE_BOOK_DETAILS,
        payload: data,
        id: id
    };
};

export const updateSearchResult = (query) => {
    return {
        type: actionTypes.UPDATE_SEARCH_RESULT,
        payload: query
    };
};


