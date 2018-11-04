// @flow

import type { Board, BoardId, ListId, AppState } from "state/types";

export const getBoards = (state: AppState): Board[] =>
    state.boards.boardList.map(boardId => ({
        id: boardId,
        name: state.boards[boardId].name
    }));

export const getListsForBoardId = (
    state: AppState,
    boardId: BoardId
): ListId[] => {
    const board = state.boards[boardId];
    return board ? board.lists : [];
};
