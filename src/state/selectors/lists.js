export const getCards = (state, listId) => {
    const list = state.lists[listId];
    return list ? list.cards : [];
};

export const getTitle = (state, listId) => {
    const list = state.lists[listId];
    return list ? list.title : "";
};
