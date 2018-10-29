// @flow

import { ADD_LIST, REMOVE_LIST } from "state/actions/lists";

import { type boardId, listId } from "state/types";

type State = {|
    +boardList: { [boardId]: { lists: Array<listId> } },
    +currentBoardId: boardId
|};

const defaultState: State = {
    boardList: {
        first_board: {
            lists: ["first_list"]
        }
    },
    currentBoardId: "first_board"
};

const boardReducer = ((state = defaultState): State, action) => {
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
