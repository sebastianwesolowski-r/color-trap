import GameActionTypes from './game-types';

import {showFireOnBlocks} from './game-utils';

const INITIAL_STATE = {
    session: false,
    score: 0,
    boardSettings: {
        rows: 0,
        columns: 0
    },
    boardBlocks: []
};

const gameReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GameActionTypes.START_GAME:
            return {
                ...state,
                session: true,
                boardSettings: {rows: action.payload.rows, columns: action.payload.columns}
            };
        case GameActionTypes.UPDATE_SCORE:
            return {
                ...state,
                score: state.score + action.payload
            };
        case GameActionTypes.SET_BOARD_BLOCKS:
            return {
                ...state,
                boardBlocks: action.payload
            };
        case GameActionTypes.SHOW_FIRE:
            return {
                ...state,
                boardBlocks: showFireOnBlocks(state.boardBlocks, action.payload)
            };
        case GameActionTypes.END_GAME:
            return {
                ...state,
                session: false,
                score: 0,
                boardSettings: INITIAL_STATE.boardSettings,
                boardBlocks: []
            };
        default: return state;
    }
};

export default gameReducer;