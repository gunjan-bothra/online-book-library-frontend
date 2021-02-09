import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Form from './Form';

const AddBook = (props) => {

    const [formData, setFormData] = useState({
        name: '',
        author: '',
        rating: ''
    });

    const handleAddBook = (data) => {
        addBookToLib(data);
        closeModal();
    }

    const { addBookToLib, closeModal } = props;
    return (
        <Form formData={formData}
            handleAddBook={handleAddBook}
            primaryText='Add'
            secondaryText='Cancel'
            closeModal={closeModal}
        ></Form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBookToLib: (item) => dispatch(actions.addBookToLib(item)),
    }
}

export default connect(null, mapDispatchToProps)(AddBook);