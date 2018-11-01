// @flow

import omit from "lodash/omit";

import { ADD_LIST, REMOVE_LIST } from "state/actions/lists";
import { ADD_CARD, REMOVE_CARD } from "state/actions/cards";

import type { CardId, ListId } from "state/types";

import type { AddCardAction, RemoveCardAction } from "state/actions/cards";
import type { AddListAction, RemoveListAction } from "state/actions/lists";

type List = {
    title: string,
    cards: CardId[]
};

export type State = {|
    +[name: ListId]: List
|};

type Action =
    | AddCardAction
    | RemoveCardAction
    | AddListAction
    | RemoveListAction;

const firstListId: ListId = "first_list";
const defaultState: State = {
    [firstListId]: {
        title: "First list",
        cards: ["first_card", "second_card"]
    }
};

const listsReducer = (state: State = defaultState, action: Action) => {
    switch (action.type) {
        case ADD_LIST: {
            return {
                ...state,
                [action.payload.listId]: { title: "New list", cards: [] }
            };
        }

        case REMOVE_LIST: {
            return omit(state, action.payload.listId);
        }

        case ADD_CARD: {
            const { cardId, listId } = action.payload;
            const cards = [...state[listId].cards, cardId];
            const list = { ...state[listId], cards };
            return { ...state, [listId]: list };
        }

        case REMOVE_CARD: {
            const { cardId, listId } = action.payload;
            const cards = state[listId].cards.filter(card => card !== cardId);
            const list = { ...state[listId], cards };
            return { ...state, [listId]: list };
        }

        default:
            return state;
    }
};

export default listsReducer;
