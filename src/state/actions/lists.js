export const ADD_LIST = "ADD_LIST";
export const addList = (listId, boardId) => {
    return {
        type: ADD_LIST,
        payload: { listId, boardId }
    };
};

export const REMOVE_LIST = "REMOVE_LIST";
export const removeList = (listId, boardId) => {
    return {
        type: REMOVE_LIST,
        payload: { listId, boardId }
    };
};
