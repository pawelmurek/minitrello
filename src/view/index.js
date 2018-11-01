import React, { Component } from "react";
import { connect } from "react-redux";

import { getCurrentBoardId } from "state/selectors/boards";

import Board from "view/board";

import type { BoardId } from "state/types";

type Props = {
    boardId: BoardId
};

class App extends Component<Props> {
    render() {
        const { boardId } = this.props;

        return <Board id={boardId} />;
    }
}

export default connect(
    state => ({
        boardId: getCurrentBoardId(state)
    }),
    {}
)(App);
