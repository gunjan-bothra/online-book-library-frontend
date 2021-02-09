import { actionTypes } from '../constant/Constant';

const initialState = {
    bookList: [],
    originalBookList: []
};

export const BooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BOOK_LIST_SUCCESS:
            return { ...state, bookList: action.payload, originalBookList: action.payload };
        case actionTypes.ADD_BOOK_TO_LIST:
            const list = [...state.bookList];
            list.push(action.payload);
            return { ...state, bookList: list, originalBookList: list };
        case actionTypes.UPDATE_SEARCH_RESULT:
            const bookList = [...state.originalBookList];
            let filtereData = bookList.filter((item) => item.name.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0);
            return { ...state, bookList: filtereData };
        default:
            return state;
    }
}
