import boardReducer from "./boards";
import { defaultState } from "./boards";

import { ADD_BOARD } from "state/actions/boards";
import { ADD_LIST, REMOVE_LIST } from "state/actions/lists";

describe("Boards reducer", () => {
    it("should return default state", () => {
        const state = boardReducer(undefined, {});

        expect(state).toEqual(defaultState);
    });

    it("should return correct state for ADD_BOARD action", () => {
        const action = {
            type: ADD_BOARD,
            payload: { id: "second_board", name: "Second Board" }
        };

        const state = boardReducer(undefined, action);

        const expectedState = {
            first_board: {
                name: "First Board",
                lists: ["first_list"]
            },
            second_board: {
                name: "Second Board",
                lists: []
            },
            boardList: ["first_board", "second_board"]
        };

        expect(state).toEqual(expectedState);
    });

    it("should return correct state for ADD_LIST action", () => {
        const action = {
            type: ADD_LIST,
            payload: { boardId: "first_board", listId: "another_list" }
        };

        const state = boardReducer(undefined, action);

        const expectedState = {
            first_board: {
                name: "First Board",
                lists: ["first_list", "another_list"]
            },
            boardList: ["first_board"]
        };

        expect(state).toEqual(expectedState);
    });

    it("should return correct state for REMOVE_LIST action", () => {
        const action = {
            type: REMOVE_LIST,
            payload: { boardId: "first_board", listId: "first_list" }
        };

        const state = boardReducer(undefined, action);

        const expectedState = {
            first_board: {
                name: "First Board",
                lists: []
            },
            boardList: ["first_board"]
        };

        expect(state).toEqual(expectedState);
    });
});
