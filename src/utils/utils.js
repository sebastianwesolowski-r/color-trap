import {store} from '../redux/store';

import {blockColors} from '../theme/theme';

export const generateBlocks = (rows, columns) => {
    let blocks = [];
    let i;
    let rowCount = 1;
    let columnCount = 1;
    for (i = 0; i < (rows * columns); i++) {
        blocks.push({key: `${rowCount}${columnCount}`, row: rowCount, column: columnCount, boxcolor: blockColors[Math.floor(Math.random() * (4 - 0 + 1))]});
        if(columnCount < columns) {
            columnCount++;
        } else {
            columnCount = 1;
            rowCount++;
        }
    }
    return blocks;
};

const findBlock = (boardBlocks, row, column) => {
    let selectedBlock = boardBlocks.find(block => block.row === row && block.column === column);
    return selectedBlock;
};

export const handleBlockClick = blockData => {

    const state = store.getState();
    const boardSettings = state.game.boardSettings;
    const boardBlocks = state.game.boardBlocks;
    let points = 0;

    const checkBlocksAround = (blockData, exclude) => {
        const {row, column, boxcolor} = blockData;

        if (row !== 1 && exclude !== "top") {
            const checkedBlock = findBlock(boardBlocks, row - 1, column);
            if (checkedBlock.boxcolor === boxcolor) {
                points++;
                checkBlocksAround({row: row - 1, column, boxcolor}, "bottom");
            }
        }

        if (column !== 1 && exclude !== "left") {
            const checkedBlock = findBlock(boardBlocks, row, column - 1);
            if (checkedBlock.boxcolor === boxcolor) {
                points++;
                checkBlocksAround({row, column: column - 1, boxcolor}, "right");
            }
        }

        if (row !== boardSettings.rows && exclude !== "bottom") {
            const checkedBlock = findBlock(boardBlocks, row + 1, column);
            if (checkedBlock.boxcolor === boxcolor) {
                points++;
                checkBlocksAround({row: row + 1, column, boxcolor}, "top");
            }
        }

        if (column !== boardSettings.columns && exclude !== "right") {
            const checkedBlock = findBlock(boardBlocks, row, column + 1);
            if (checkedBlock.boxcolor === boxcolor) {
                points++;
                checkBlocksAround({row, column: column + 1, boxcolor}, "left");
            }
        }
    };

    checkBlocksAround(blockData);
    console.log(points);
}