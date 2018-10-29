export const ADD_BOARD = "ADD_BOARD";
export const addBoard = id => {
    return {
        type: ADD_BOARD,
        payload: id
    };
};
