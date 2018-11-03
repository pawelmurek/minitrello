// @flow

import React, { Component } from "react";
import { connect } from "react-redux";

import { removeList, moveCard } from "state/actions/lists";
import { removeCards } from "state/actions/cards";
import { getCards, getTitle } from "state/selectors/lists";

import Card from "view/card";
import AddCard from "view/add-card";
import RemoveImage from "view/img/remove.svg";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { ListWrapper, ListTitle, RemoveIcon } from "./styled";

import type { CardId, ListId, BoardId } from "state/types";

type Props = {
    title: string,
    cards: CardId[],
    id: ListId,
    boardId: BoardId,
    removeList: (ListId, BoardId, CardId[]) => void,
    moveCard: (ListId, CardId, number) => void
};

class ListComponent extends Component<Props> {
    onDragEnd = data => {
        if (data.destination) {
            const { destination, draggableId } = data;
            this.props.moveCard(
                destination.droppableId,
                draggableId,
                destination.index
            );
        }
    };

    render() {
        const { title, cards, id: listId, boardId, removeList } = this.props;

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId={listId}>
                    {(provided, snapshot) => (
                        <ListWrapper ref={provided.innerRef}>
                            <ListTitle>{title}</ListTitle>
                            <RemoveIcon
                                src={RemoveImage}
                                className="remove-list"
                                alt="Delete list"
                                onClick={() =>
                                    removeList(listId, boardId, cards)
                                }
                            />

                            {cards.map((cardId, index) => (
                                <Draggable
                                    key={cardId}
                                    draggableId={cardId}
                                    index={index}
                                >
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="card-wrapper"
                                        >
                                            <Card
                                                provided={provided}
                                                id={cardId}
                                                listId={listId}
                                                key={cardId}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}

                            <AddCard className="add-card" listId={listId} />
                        </ListWrapper>
                    )}
                </Droppable>
            </DragDropContext>
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
        },
        moveCard: (listId, card, index) =>
            dispatch(moveCard(listId, card, index))
    })
)(ListComponent);
