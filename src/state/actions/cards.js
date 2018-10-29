export const ADD_CARD = "ADD_CARD";
export const addCard = (cardId, listId) => {
    return {
        type: ADD_CARD,
        payload: { cardId, listId }
    };
};

export const REMOVE_CARD = "REMOVE_CARD";
export const removeCard = (cardId, listId) => {
    return {
        type: REMOVE_CARD,
        payload: { cardId, listId }
    };
};

export const REMOVE_CARDS = "REMOVE_CARDS";
export const removeCards = cards => {
    return {
        type: REMOVE_CARDS,
        payload: cards
    };
};

export const SELECT_CARD = "SELECT_CARD";
export const selectCard = id => {
    return {
        type: SELECT_CARD,
        payload: id
    };
};

export const SET_TITLE = "SET_TITLE";
export const setTitle = (id, title) => {
    return {
        type: SET_TITLE,
        payload: { id, title }
    };
};

export const SET_DESCRIPTION = "SET_DESCRIPTION";
export const setDescription = (id, description) => {
    return {
        type: SET_DESCRIPTION,
        payload: { id, description }
    };
};
