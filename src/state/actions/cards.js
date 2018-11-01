// @flow

import type { CardId, ListId } from "state/types";

export const ADD_CARD: "ADD_CARD" = "ADD_CARD";
export type AddCardAction = {
    type: typeof ADD_CARD,
    payload: { cardId: CardId, listId: ListId }
};
export const addCard = (cardId: CardId, listId: ListId): AddCardAction => {
    return {
        type: ADD_CARD,
        payload: { cardId, listId }
    };
};

export const REMOVE_CARD: "REMOVE_CARD" = "REMOVE_CARD";
export type RemoveCardAction = {
    type: typeof REMOVE_CARD,
    payload: { cardId: CardId, listId: ListId }
};
export const removeCard = (
    cardId: CardId,
    listId: ListId
): RemoveCardAction => {
    return {
        type: REMOVE_CARD,
        payload: { cardId, listId }
    };
};

export const REMOVE_CARDS: "REMOVE_CARDS" = "REMOVE_CARDS";
export type RemoveCardsAction = {
    type: typeof REMOVE_CARDS,
    payload: CardId[]
};
export const removeCards = (cards: CardId[]): RemoveCardsAction => {
    return {
        type: REMOVE_CARDS,
        payload: cards
    };
};

export const SELECT_CARD: "SELECT_CARD" = "SELECT_CARD";
export type SelectCardAction = {
    type: typeof SELECT_CARD,
    payload: CardId
};
export const selectCard = (id: CardId): SelectCardAction => {
    return {
        type: SELECT_CARD,
        payload: id
    };
};

export const SET_TITLE: "SET_TITLE" = "SET_TITLE";
export type SetTitleAction = {
    type: typeof SET_TITLE,
    payload: { id: CardId, title: string }
};
export const setTitle = (id: CardId, title: string): SetTitleAction => {
    return {
        type: SET_TITLE,
        payload: { id, title }
    };
};

export const SET_DESCRIPTION: "SET_DESCRIPTION" = "SET_DESCRIPTION";
export type SetDescriptionAction = {
    type: typeof SET_DESCRIPTION,
    payload: { id: CardId, description: string }
};
export const setDescription = (
    id: CardId,
    description: string
): SetDescriptionAction => {
    return {
        type: SET_DESCRIPTION,
        payload: { id, description }
    };
};
