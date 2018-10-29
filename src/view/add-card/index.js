import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import uniqid from "uniqid";

import { addCard } from "state/actions/cards";

const Wrapper = styled.div`
    text-align: right;
    margin: 20px 5px 5px;
    padding: 5px;
    color: #1a0dab;
    cursor: pointer;
    &:hover {
        background-color: rgba(127, 127, 127, 0.1);
    }
`;

class AddCard extends Component {
    static defaultProps = {
        listId: ""
    };

    render() {
        const { listId, className } = this.props;

        return (
            <Wrapper
                onClick={() => this.props.addCard(uniqid(), listId)}
                className={className}
            >
                <b>+</b> Add card
            </Wrapper>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        addCard: (cardId, listID) => dispatch(addCard(cardId, listID))
    })
)(AddCard);
