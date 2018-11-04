import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Boards from "view/boards";
import Board from "view/board";

import type { BoardId } from "state/types";

type Props = {
    boardId: BoardId
};

export default class App extends Component<Props> {
    render() {
        return (
            <Router>
                <>
                    <Route exact path="/" component={Boards} />
                    <Route exact path="/:id" component={Board} />
                </>
            </Router>
        );
    }
}
