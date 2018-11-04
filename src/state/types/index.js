// @flow

import type { State as CardsState } from "state/reducers/cards";
import type { State as ListsState } from "state/reducers/lists";
import type { State as BoardsState } from "state/reducers/boards";

export type BoardId = string;
export type ListId = string;
export type CardId = string;

export type Board = { id: BoardId, name: string };

export type AppState = {
    cards: CardsState,
    lists: ListsState,
    boards: BoardsState
};
