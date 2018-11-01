// @flow

import type { CardId, ListId, AppState } from "state/types";

export const getCards = (state: AppState, listId: ListId): CardId[] => {
    const list = state.lists[listId];
    return list ? list.cards : [];
};

export const getTitle = (state: AppState, listId: ListId): string => {
    const list = state.lists[listId];
    return list ? list.title : "";
};
