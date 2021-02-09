import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const FormDiv = styled.form`
    text-align: left;
    margin-bottom: 24px;
`
const Main = styled.div`
margin: 0 40px 16px 16px;
`;

const H5 = styled.h5`
    margin-bottom: 8px;
`

const Input = styled.input`
    height: 30px;
    width: 100%;
`
const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
`
const baseButtonStyles = css`
    height: 30px;
    color: white;
`

const PrimaryButton = styled.button`
    ${baseButtonStyles}
    background: green;
`

const SecondaryButton = styled.button`
    ${baseButtonStyles}
    background: red;
`
const Form = (props) => {
    const [formData, setFormData] = useState(props.formData);

    useEffect(() => {
        setFormData(props.formData);
    }, [props.formData]);

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const { primaryText, secondaryText, closeModal } = props;
    return (
        <Main>
            <FormDiv>
                <H5>Title:</H5>
                <Input
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <H5>Author:</H5>
                <Input
                    type="text"
                    name='author'
                    value={formData.author}
                    onChange={handleInputChange}
                />
                <H5>Rating:</H5>
                <Input
                    type="text"
                    name='rating'
                    value={formData.rating}
                    onChange={handleInputChange}
                />
            </FormDiv>
            <ButtonGroup>
                <PrimaryButton type="button"
                    onClick={() => props.handleAddBook(formData)}
                >
                    {primaryText}
                </PrimaryButton >
                <SecondaryButton type="button"
                    onClick={() => props.closeModal()}
                >
                    {secondaryText}
                </SecondaryButton>
            </ButtonGroup>
        </Main>
    )
}

export default Form