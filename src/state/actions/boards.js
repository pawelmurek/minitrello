// @flow

import type { BoardId } from "state/types";

export const ADD_BOARD: "ADD_BOARD" = "ADD_BOARD";
export type AddBoardAction = {
    type: typeof ADD_BOARD,
    payload: { id: BoardId, name: string }
};
export const addBoard = (id: BoardId, name: string): AddBoardAction => {
    return {
        type: ADD_BOARD,
        payload: { id, name }
    };
};
