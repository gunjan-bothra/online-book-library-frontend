import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import styled, { css } from 'styled-components';
import Modal from '../component/Modal';
import AddBook from '../component/AddBook';
import EditBookDetails from '../component/EditBookDetails';
import Search from '../component/Search';

const baseTableStyles = css`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`;

const Section = styled.section`
    margin: 40px;
`;
const Table = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
`;

const Td = styled.td`
    ${baseTableStyles}
`;

const Th = styled.th`
    ${baseTableStyles}
`;

const BookList = (props) => {
    const [bookData, setBookData] = useState({
        showAddModal: false,
        isBookAdd: false,
        isBookEdit: false,
        editableItem: '',
        selectedLineItemData: {}
    });
    useEffect(() => {
        props.fetchBookList();
    }, []);
    //Adding book to the library
    const handleAddBook = () => {
        setBookData({ ...bookData, showAddModal: true, isBookAdd: true });
    }
    // Close modal
    const handleCloseModal = () => {
        setBookData({ ...bookData, showAddModal: false, isBookAdd: false, isBookEdit: false });
    }
    //Updating book details
    const handleEditBookDetails = (event, bookId) => {
        let data = bookList.filter((item) => item.bookId === bookId);
        setBookData({
            ...bookData, showAddModal: true, isBookEdit: true,
            editableItem: bookId,
            selectedLineItemData: data
        });
    }
    //table body
    const tableData = () => {
        return bookList.length && bookList.map((item) => {
            return (
                <tr key={item.bookId}>
                    <Td>{item.name}</Td>
                    <Td>{item.author}</Td>
                    <Td>{item.rating}/5</Td>
                    <Td><button
                        onClick={(event) => { handleEditBookDetails(event, item.bookId) }}
                    >Edit</button></Td>
                </tr>
            )
        });
    }

    const { bookList } = props
    return (
        <div>
            <Section>
                <Search></Search>
                <Table>
                    <thead>
                        <tr>
                            <Th>Name</Th>
                            <Th>Author</Th>
                            <Th>Rating</Th>
                            <Th></Th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList.length ? (tableData()) : (
                           <tr>
                           <td colspan="4">
                               No Data
                           </td>
                       </tr>
                        )
                        }
                    </tbody>

                </Table>
            </Section>
            <Modal
                show={bookData.showAddModal}
                heading={bookData.isBookAdd ? 'Add Book' : 'Edit Book Details'}
                primaryText='Add'
                secondaryText='Cancel'
            >
                {bookData.isBookAdd && (
                    <AddBook closeModal={handleCloseModal}></AddBook>
                )}
                {bookData.isBookEdit && (
                    <EditBookDetails editableItem={bookData.editableItem} closeModal={handleCloseModal}
                        selectedLineItemData={bookData.selectedLineItemData}></EditBookDetails>
                )}
            </Modal>
            <footer className='App-footer'>
                <button className='footer-button' onClick={handleAddBook}></button>
            </footer>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        bookList: state.books.bookList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchBookList: () => dispatch(actions.fetchBookList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);