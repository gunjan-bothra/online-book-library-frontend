import React from 'react';
import styled, { css } from 'styled-components';

const ModalDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display:  ${props => props.show ? "block" : "none"};
  
`;
const ModalSection = styled.section`
    position:fixed;
    background: white;
    width: 30%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
`;

const Modal = ({ heading, show, children, primaryText, secondaryText }) => {
    return (
        <ModalDiv show={show}>
            <ModalSection>
                <h1>{heading}</h1>
                <hr></hr>
                {children}
            </ModalSection>
        </ModalDiv>
    );
};

export default Modal;