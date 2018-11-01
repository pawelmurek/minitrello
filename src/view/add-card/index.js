// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import uniqid from "uniqid";

import { addCard } from "state/actions/cards";

import { Wrapper } from "./styled";

import type { CardId, ListId } from "state/types";

type Props = {
    listId: ListId,
    className: string,
    addCard: (CardId, ListId) => void
};

class AddCard extends Component<Props> {
    static defaultProps = {
        listId: ""
    };

    render() {
        const { listId, className, addCard } = this.props;

        return (
            <Wrapper
                onClick={() => addCard(uniqid(), listId)}
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
