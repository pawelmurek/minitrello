export const getTitle = (state, cardId) => {
    const card = state.cards.cardList[cardId];
    return card ? card.title : "";
};

export const getDescription = (state, cardId) => {
    const card = state.cards.cardList[cardId];
    return card ? card.description : "";
};

export const isSelected = (state, cardId) =>
    cardId === state.cards.selectedCard;
