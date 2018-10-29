import omit from "lodash/omit";

import { ADD_LIST, REMOVE_LIST } from "state/actions/lists";
import { ADD_CARD, REMOVE_CARD } from "state/actions/cards";

import { type cardId, listId } from "state/types";

type State = {|
    +[listId]: {
        title: string,
        cards: Array<cardId>
    },
|}

const defaultState = {
    'first_list': {
        title: "First list",
        cards: ["first_card", "second_card", "third_card"]
    },
};

const listsReducer = (state = defaultState, action) => {
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
