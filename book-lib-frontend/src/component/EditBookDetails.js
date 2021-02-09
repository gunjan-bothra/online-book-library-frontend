import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Form from './Form';

const EditBookDetails = (props) => {

    const handleUpdateBookDetails = (data) => {
        updateBookDetails(data, editableItem);
        closeModal();
    }

    const { updateBookDetails, closeModal, editableItem, selectedLineItemData } = props;
    return (
        <Form formData={selectedLineItemData[0]}
            handleAddBook={handleUpdateBookDetails}
            primaryText='Update'
            secondaryText='Cancel'
            closeModal={closeModal}
        ></Form>
    )
}
const mapStateToProps = (state) => {
    return {
        bookList: state.books.bookList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateBookDetails: (item, id) => dispatch(actions.updateBookDetails(item, id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBookDetails);