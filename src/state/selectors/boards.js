export const getCurrentBoardId = state => state.boards.currentBoardId;

export const getListsForBoardId = (state, boardId) => {
    const board = state.boards.boardList[boardId];
    return board ? board.lists : [];
};
