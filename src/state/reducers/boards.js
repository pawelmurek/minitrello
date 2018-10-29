import { ADD_LIST, REMOVE_LIST } from "state/actions/lists";

const defaultState = {
    boardList: {
        1: {
            lists: [1, 2]
        }
    },
    currentBoardId: 1
};

const boardReducer = (state = defaultState, action) => {
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
