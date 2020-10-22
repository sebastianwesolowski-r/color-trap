import {createSelector} from 'reselect';

export const selectGame = state => state.game;

export const selectSession = createSelector(
    [selectGame],
    game => game.session
);

export const selectScore = createSelector(
    [selectGame],
    game => game.score
);

export const selectBoardSettings = createSelector(
    [selectGame],
    game => game.boardSettings
);

export const selectBoardBlocks = createSelector(
    [selectGame],
    game => game.boardBlocks
);