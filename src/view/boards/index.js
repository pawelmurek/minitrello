// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import uniqid from "uniqid";

import { getBoards } from "state/selectors/boards";

import {
    BoardsWrapper,
    ControlsWrapper,
    Input,
    Button,
    LinkWrapper
} from "./styled";

import { addBoard } from "state/actions/boards";

import type { Board, BoardId } from "state/types";

type Props = {
    boards: Board[],
    addBoard: string => void
};

type State = {
    name: string
};

class BoardsComponent extends Component<Props, State> {
    state = {
        name: ""
    };

    onChange = event => {
        this.setState({ name: event.target.value });
    };

    onClick = () => {
        if (this.state.name) {
            this.props.addBoard(this.state.name);
            this.setState({ name: "" });
        }
    };

    render() {
        const { boards } = this.props;

        return (
            <BoardsWrapper>
                <ControlsWrapper>
                    <Input
                        type="text"
                        value={this.state.name}
                        onChange={this.onChange}
                    />
                    <Button onClick={this.onClick}>Add board</Button>
                </ControlsWrapper>
                {boards.map(board => (
                    <LinkWrapper>
                        <Link to={`/${board.id}`}>{board.name}</Link>
                    </LinkWrapper>
                ))}
            </BoardsWrapper>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        boards: getBoards(state)
    }),
    dispatch => ({
        addBoard: name => dispatch(addBoard(uniqid(), name))
    })
)(withRouter(BoardsComponent));
