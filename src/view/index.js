import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";

import { getCurrentBoardId } from "state/selectors/boards";

import Board from "view/board";

class App extends Component {
    static defaultProps = {
        onClick: () => {}
    };

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
