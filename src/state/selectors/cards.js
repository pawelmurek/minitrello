// @flow

import type { CardId, AppState } from "state/types";

export const getTitle = (state: AppState, cardId: CardId): string => {
    const card = state.cards.cardList[cardId];
    return card ? card.title : "";
};

export const getDescription = (state: AppState, cardId: CardId): string => {
    const card = state.cards.cardList[cardId];
    return card ? card.description : "";
};

export const isSelected = (state: AppState, cardId: CardId): boolean =>
    cardId === state.cards.selectedCard;
