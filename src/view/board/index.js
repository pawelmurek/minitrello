import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import uniqid from "uniqid";

import { getListsForBoardId } from "state/selectors/boards";
import { addList } from "state/actions/lists";

import List from "view/list";

const BoardWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 25px;
`;

const AddBoard = styled.div`
    font-size: 22px;
    font-weight: bold;
    padding: 10px;
    color: #1a0dab;
    line-height: 0.5;
    border-radius: 100%;
    &:hover {
        background-color: rgba(127, 127, 127, 0.25);
    }
    cursor: pointer;
`;

class BoardComponent extends Component {
    state = {};

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
