import GameActionTypes from './game-types';

export const startGame = boardSettings => ({
    type: GameActionTypes.START_GAME,
    payload: boardSettings
});

export const updateScore = points => ({
    type: GameActionTypes.UPDATE_SCORE,
    payload: points
});

export const setBoardBlocks = blocks => ({
    type: GameActionTypes.SET_BOARD_BLOCKS,
    payload: blocks
});

export const showFire = payload => ({
    type: GameActionTypes.SHOW_FIRE,
    payload
});

export const endGame = () => ({
    type: GameActionTypes.END_GAME
});