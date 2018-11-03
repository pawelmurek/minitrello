import boardReducer from "./boards";
import { defaultState } from "./boards";

import { ADD_LIST, REMOVE_LIST } from "state/actions/lists";

describe("Boards reducer", () => {
    it("should return default state", () => {
        const state = boardReducer(undefined, {});

        expect(state).toEqual(defaultState);
    });

    it("should return correct state for ADD_LIST action", () => {
        const action = {
            type: ADD_LIST,
            payload: { boardId: "first_board", listId: "another_list" }
        };

        const state = boardReducer(undefined, action);

        const expectedState = {
            boardList: {
                first_board: {
                    lists: ["first_list", "another_list"]
                }
            },
            currentBoardId: "first_board"
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
            boardList: {
                first_board: {
                    lists: []
                }
            },
            currentBoardId: "first_board"
        };

        expect(state).toEqual(expectedState);
    });
});
