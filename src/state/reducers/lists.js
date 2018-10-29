import omit from "lodash/omit";

import { ADD_LIST, REMOVE_LIST } from "state/actions/lists";
import { ADD_CARD, REMOVE_CARD } from "state/actions/cards";

const defaultState = {
    1: {
        title: "pierwsza",
        cards: ["b63ge781ge817", "b63ge781ge818", "b63ge781ge819"]
    },
    2: {
        title: "druga",
        cards: ["b63ge781ge8110", "b63ge781ge8111", "b63ge781ge8112"]
    }
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
