// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import uniqid from "uniqid";

import { getListsForBoardId } from "state/selectors/boards";
import { addList } from "state/actions/lists";

import List from "view/list";

import { BoardWrapper, AddList, LinkWrapper } from "./styled";

import type { ListId, BoardId } from "state/types";

type Props = {
    lists: ListId[],
    addList: BoardId => void,
    match: { params: { id: BoardId } }
};

class BoardComponent extends Component<Props> {
    render() {
        const { lists, addList, match } = this.props;
        const boardId = match.params.id;

        return (
            <>
                <LinkWrapper>
                    <Link to="/">Back to board list</Link>
                </LinkWrapper>
                <BoardWrapper>
                    {lists.map(listId => (
                        <List id={listId} boardId={boardId} key={listId} />
                    ))}

                    <AddList onClick={() => addList(boardId)}>+</AddList>
                </BoardWrapper>
            </>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        lists: getListsForBoardId(state, ownProps.match.params.id)
    }),
    dispatch => ({
        addList: boardId => dispatch(addList(uniqid(), boardId))
    })
)(withRouter(BoardComponent));
