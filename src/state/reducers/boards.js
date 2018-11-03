// @flow

import { ADD_LIST, REMOVE_LIST } from "state/actions/lists";

import type { BoardId, ListId } from "state/types";

import type { AddListAction, RemoveListAction } from "state/actions/lists";

export type State = {|
    +boardList: { [BoardId]: { lists: ListId[] } },
    +currentBoardId: BoardId
|};

type Action = AddListAction | RemoveListAction;

export const defaultState: State = {
    boardList: {
        first_board: {
            lists: ["first_list"]
        }
    },
    currentBoardId: "first_board"
};

const boardReducer = (state: State = defaultState, action: Action) => {
    switch (action.type) {
        case ADD_LIST: {
            const { boardId, listId } = action.payload;
            const lists = [...state.boardList[boardId].lists, listId];
            const board = { ...state.boardList[boardId], lists };
            const boardList = { ...state.boardList, [boardId]: board };
            return { ...state, boardList };
        }

        case REMOVE_LIST: {
            const { boardId, listId } = action.payload;
            const lists = state.boardList[boardId].lists.filter(
                list => list !== listId
            );
            const board = { ...state.boardList[boardId], lists };
            const boardList = { ...state.boardList, [boardId]: board };
            return { ...state, boardList };
        }

        default:
            return state;
    }
};

export default boardReducer;
