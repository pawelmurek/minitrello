import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { removeList } from "state/actions/lists";
import { removeCards } from "state/actions/cards";
import { getCards, getTitle } from "state/selectors/lists";

import Card from "view/card";
import AddCard from "view/add-card";
import RemoveImage from "view/img/remove.svg";

const ListWrapper = styled.div`
    position: relative;
    width: 400px;
    min-height: 50px;
    border-radius: 5px;
    padding: 10px;
    background-color: #cfd8dc;
    &:not(:last-child) {
        margin-right: 20px;
    }
    & .add-card,
    & .remove-list {
        visibility: hidden;
    }
    &:hover .add-card,
    &:hover .remove-list {
        visibility: visible;
    }
`;

const ListTitle = styled.h4`
    text-align: center;
    margin: 10px 0;
`;

const RemoveIcon = styled.img`
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    opacity: 0.7;
    cursor: pointer;
`;

class ListComponent extends Component {
    render() {
        const { title, cards, id: listId, boardId } = this.props;

        return (
            <ListWrapper>
                <ListTitle>{title}</ListTitle>
                <RemoveIcon
                    src={RemoveImage}
                    className="remove-list"
                    alt="Delete list"
                    onClick={() =>
                        this.props.removeList(listId, boardId, cards)
                    }
                />

                {cards.map(cardId => (
                    <Card id={cardId} listId={listId} key={cardId} />
                ))}

                <AddCard className="add-card" listId={listId} />
            </ListWrapper>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        title: getTitle(state, ownProps.id),
        cards: getCards(state, ownProps.id)
    }),
    dispatch => ({
        removeList: (listId, boardId, cards) => {
            dispatch(removeList(listId, boardId));
            dispatch(removeCards(cards));
        }
    })
)(ListComponent);
