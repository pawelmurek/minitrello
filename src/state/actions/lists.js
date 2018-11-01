// @flow

import type { ListId, BoardId } from "state/types";

export const ADD_LIST: "ADD_LIST" = "ADD_LIST";
export type AddListAction = {
    type: typeof ADD_LIST,
    payload: { listId: ListId, boardId: BoardId }
};
export const addList = (listId: ListId, boardId: BoardId): AddListAction => {
    return {
        type: ADD_LIST,
        payload: { listId, boardId }
    };
};

export const REMOVE_LIST: "REMOVE_LIST" = "REMOVE_LIST";
export type RemoveListAction = {
    type: typeof REMOVE_LIST,
    payload: { listId: ListId, boardId: BoardId }
};
export const removeList = (
    listId: ListId,
    boardId: BoardId
): RemoveListAction => {
    return {
        type: REMOVE_LIST,
        payload: { listId, boardId }
    };
};
