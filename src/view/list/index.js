// @flow

import React, { Component } from "react";
import { connect } from "react-redux";

import { removeList } from "state/actions/lists";
import { removeCards } from "state/actions/cards";
import { getCards, getTitle } from "state/selectors/lists";

import Card from "view/card";
import AddCard from "view/add-card";
import RemoveImage from "view/img/remove.svg";

import { ListWrapper, ListTitle, RemoveIcon } from "./styled";

import type { CardId, ListId, BoardId } from "state/types";

type Props = {
    title: string,
    cards: CardId[],
    id: ListId,
    boardId: BoardId,
    removeList: (ListId, BoardId, CardId[]) => void
};

class ListComponent extends Component<Props> {
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
