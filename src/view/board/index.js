// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import uniqid from "uniqid";

import { getListsForBoardId } from "state/selectors/boards";
import { addList } from "state/actions/lists";

import List from "view/list";

import { BoardWrapper, AddBoard } from "./styled";

import type { ListId, BoardId } from "state/types";

type Props = {
    id: BoardId,
    lists: ListId[],
    addList: BoardId => void
};

class BoardComponent extends Component<Props> {
    render() {
        const { id: boardId, lists, addList } = this.props;

        return (
            <BoardWrapper>
                {lists.map(listId => (
                    <List id={listId} boardId={boardId} key={listId} />
                ))}
                <AddBoard onClick={() => addList(boardId)}>+</AddBoard>
            </BoardWrapper>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        lists: getListsForBoardId(state, ownProps.id)
    }),
    dispatch => ({
        addList: boardId => dispatch(addList(uniqid(), boardId))
    })
)(BoardComponent);
