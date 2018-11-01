// @flow

import omit from "lodash/omit";

import {
    SELECT_CARD,
    ADD_CARD,
    REMOVE_CARD,
    REMOVE_CARDS,
    SET_TITLE,
    SET_DESCRIPTION
} from "state/actions/cards";

import type { CardId } from "state/types";

import type {
    SelectCardAction,
    AddCardAction,
    RemoveCardAction,
    RemoveCardsAction,
    SetTitleAction,
    SetDescriptionAction
} from "state/actions/cards";

export type State = {|
    +cardList: {
        [CardId]: {
            title: string,
            description: string
        }
    },
    +selectedCard: CardId | null
|};

type Action =
    | SelectCardAction
    | AddCardAction
    | RemoveCardAction
    | RemoveCardsAction
    | SetTitleAction
    | SetDescriptionAction;

const defaultState = {
    cardList: {
        first_card: {
            title: "First Card",
            description: "Description of the first card"
        },
        second_card: {
            title: "Second Card",
            description: "Description of the second card"
        }
    },
    selectedCard: null
};

const cardsReducer = (state: State = defaultState, action: Action) => {
    switch (action.type) {
        case SELECT_CARD: {
            return { ...state, selectedCard: action.payload };
        }

        case ADD_CARD: {
            const cardList = {
                ...state.cardList,
                [action.payload.cardId]: { title: "New Card", description: "" }
            };
            return { ...state, cardList };
        }

        case REMOVE_CARD: {
            const cardList = omit(state.cardList, action.payload.cardId);
            return { ...state, cardList };
        }

        case REMOVE_CARDS: {
            const cardList = omit(state.cardList, action.payload);
            return { ...state, cardList };
        }

        case SET_TITLE: {
            const { id, title } = action.payload;
            const card = { ...state.cardList[id], title: title };
            const cardList = { ...state.cardList, [id]: card };
            return { ...state, cardList };
        }

        case SET_DESCRIPTION: {
            const { id, description } = action.payload;
            const card = {
                ...state.cardList[id],
                description: description
            };
            const cardList = { ...state.cardList, [id]: card };
            return { ...state, cardList };
        }

        default:
            return state;
    }
};

export default cardsReducer;
