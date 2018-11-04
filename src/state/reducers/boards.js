// @flow

import { ADD_BOARD } from "state/actions/boards";
import { ADD_LIST, REMOVE_LIST } from "state/actions/lists";

import type { BoardId, ListId } from "state/types";

import type { AddBoardAction } from "state/actions/boards";
import type { AddListAction, RemoveListAction } from "state/actions/lists";

export type State = {|
    [BoardId]: {
        name: string,
        lists: ListId[]
    },
    boardList: BoardId[]
|};

type Action = AddBoardAction | AddListAction | RemoveListAction;

const firstBoardId: BoardId = "first_board";
export const defaultState: State = {
    [firstBoardId]: {
        name: "First Board",
        lists: ["first_list"]
    },
    boardList: [firstBoardId]
};

const boardReducer = (state: State = defaultState, action: Action) => {
    switch (action.type) {
        case ADD_BOARD: {
            const { id, name } = action.payload;

            return {
                ...state,
                [id]: { name, lists: [] },
                boardList: [...state.boardList, id]
            };
        }

        case ADD_LIST: {
            const { boardId, listId } = action.payload;
            const newLists = [...state[boardId].lists, listId];

            return {
                ...state,
                [boardId]: { ...state[boardId], lists: newLists }
            };
        }

        case REMOVE_LIST: {
            const { boardId, listId } = action.payload;
            const newLists = state[boardId].lists.filter(
                list => list !== listId
            );

            return {
                ...state,
                [boardId]: { ...state[boardId], lists: newLists }
            };
        }

        default:
            return state;
    }
};

export default boardReducer;
