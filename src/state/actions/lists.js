// @flow

import type { CardId, ListId, BoardId } from "state/types";

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

export const MOVE_CARD: "MOVE_CARD" = "MOVE_CARD";
export type MoveCardAction = {
    type: typeof MOVE_CARD,
    payload: { listId: ListId, card: CardId, index: number }
};
export const moveCard = (
    listId: ListId,
    card: CardId,
    index: number
): MoveCardAction => {
    return {
        type: MOVE_CARD,
        payload: { listId, card, index }
    };
};
