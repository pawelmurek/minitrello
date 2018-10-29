import omit from "lodash/omit";

import {
    SELECT_CARD,
    ADD_CARD,
    REMOVE_CARD,
    REMOVE_CARDS,
    SET_TITLE,
    SET_DESCRIPTION
} from "state/actions/cards";

const defaultState = {
    cardList: {
        b63ge781ge817: { title: "First Card", description: "My description" },
        b63ge781ge818: { title: "Second Card", description: "My description" },
        b63ge781ge819: { title: "Third Card", description: "My description" },
        b63ge781ge8110: {
            title: "another Card",
            description: "My description"
        },
        b63ge781ge8111: {
            title: "yet another Card",
            description: "My description"
        },
        b63ge781ge8112: { title: "my Card", description: "My description" }
    },
    selectedCard: null
};

const cardsReducer = (state = defaultState, action) => {
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
