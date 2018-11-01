// @flow

import type { BoardId, ListId, AppState } from "state/types";

export const getCurrentBoardId = (state: AppState): BoardId =>
    state.boards.currentBoardId;

export const getListsForBoardId = (
    state: AppState,
    boardId: BoardId
): ListId[] => {
    const board = state.boards.boardList[boardId];
    return board ? board.lists : [];
};
