import {store} from '../redux/store';

import {updateScore, showFire} from '../redux/game/game-actions';

import {blockColors} from '../theme/theme';

const generateColor = () => {
    return blockColors[Math.floor(Math.random() * (4 - 0 + 1))];
}

export const generateBlocks = (rows, columns) => {
    let blocks = [];
    let i;
    let rowCount = 1;
    let columnCount = 1;
    for (i = 0; i < (rows * columns); i++) {
        blocks.push({key: `${rowCount}r${columnCount}`, row: rowCount, column: columnCount, boxcolor: generateColor(), hitblock: false});
        if(columnCount < columns) {
            columnCount++;
        } else {
            columnCount = 1;
            rowCount++;
        }
    }
    return blocks;
};

let functionBreak = false;

export const handleBlockClick = blockData => {

    if(functionBreak) return;

    const state = store.getState();
    const boardSettings = state.game.boardSettings;
    const boardBlocks = state.game.boardBlocks;
    let firstInvocation = true;
    let points = 0;
    const hitblocks = [];

    const findBlock = (row, column) => {
        let selectedBlock = boardBlocks.find(block => block.row === row && block.column === column);
        return selectedBlock;
    };

    const replaceBlocks = () => {
        hitblocks.forEach(hitBlock => {
            const blockUnderHitblock = findBlock(hitBlock.row + 1, hitBlock.column);
            if(blockUnderHitblock && hitblocks.find(block => block.row === blockUnderHitblock.row && block.column === blockUnderHitblock.column)) {
                return;
            }
            const allColumnBoardblocks = boardBlocks.filter(boardBlock => boardBlock.column === hitBlock.column && boardBlock.row <= hitBlock.row);
            const hitblocksFromSameColumn = hitblocks.filter(block => block.column === hitBlock.column);
            const replaceCount = allColumnBoardblocks.length - hitblocksFromSameColumn.length;

            const firstBlocks = allColumnBoardblocks.slice(0, replaceCount).reverse();
            const lastBlocks = allColumnBoardblocks.slice(-replaceCount).reverse();

            let i;
            for(i = 0; i < firstBlocks.length; i++) {
                lastBlocks[i].boxcolor = firstBlocks[i].boxcolor;
            }

            allColumnBoardblocks.slice(0, hitblocksFromSameColumn.length).forEach(block => block.boxcolor = generateColor());
        })
    };

    const checkBlocksAround = (blockData, exclude) => {
        const {row, column, boxcolor} = blockData;

        const countFirstBlock = () => {
            if(firstInvocation) {
                points++;
                hitblocks.push(blockData);
                firstInvocation = false;
            }
            return;
        }

        if (row !== 1 && exclude !== "top") {
            const checkedBlock = findBlock(row - 1, column);
            if(hitblocks.findIndex(block => block.row === checkedBlock.row && block.column === checkedBlock.column) !== -1) return;
            if (checkedBlock.boxcolor === boxcolor) {
                points++;
                countFirstBlock();
                hitblocks.push(checkedBlock);
                checkBlocksAround({row: row - 1, column, boxcolor}, "bottom");
            }
        }

        if (column !== 1  && exclude !== "left") {
            const checkedBlock = findBlock(row, column - 1);
            if(hitblocks.findIndex(block => block.row === checkedBlock.row && block.column === checkedBlock.column) !== -1) return;
            if (checkedBlock.boxcolor === boxcolor) {
                points++;
                countFirstBlock();
                hitblocks.push(checkedBlock);
                checkBlocksAround({row, column: column - 1, boxcolor}, "right");
            }
        }

        if (row !== boardSettings.rows && exclude !== "bottom") {
            const checkedBlock = findBlock(row + 1, column);
            if(hitblocks.findIndex(block => block.row === checkedBlock.row && block.column === checkedBlock.column) !== -1) return;
            if (checkedBlock.boxcolor === boxcolor && !hitblocks.includes(block => block.row === checkedBlock.row && block.column === column)) {
                points++;
                countFirstBlock();
                hitblocks.push(checkedBlock);
                checkBlocksAround({row: row + 1, column, boxcolor}, "top");
            }
        }

        if (column !== boardSettings.columns  && exclude !== "right") {
            const checkedBlock = findBlock(row, column + 1);
            if(hitblocks.findIndex(block => block.row === checkedBlock.row && block.column === checkedBlock.column) !== -1) return;
            if (checkedBlock.boxcolor === boxcolor && !hitblocks.includes(block => block.row === checkedBlock.row && block.column === column)) {
                points++;
                countFirstBlock();
                hitblocks.push(checkedBlock);
                checkBlocksAround({row, column: column + 1, boxcolor}, "left");
            }
        }
    };

    checkBlocksAround(blockData);
    store.dispatch(showFire({hitblocks, fireOption: true}));
    functionBreak = true;
    setTimeout(function() {
        store.dispatch(showFire({hitblocks, fireOption: false}));
        replaceBlocks();
        store.dispatch(updateScore(points));
        functionBreak = false;
    }, 400);
}

export const checkIfTheGameIsPossible = boardBlocks => {
    let movementsFound = false;
    boardBlocks.every(boardBlock => {
        let upperBlock = boardBlocks.find(block => block.row === boardBlock.row - 1 && block.column === boardBlock.column);
        if(upperBlock && upperBlock.boxcolor === boardBlock.boxcolor) movementsFound = true;
        let leftBlock = boardBlocks.find(block => block.row === boardBlock.row && block.column === boardBlock.column - 1);
        if(leftBlock && leftBlock.boxcolor === boardBlock.boxcolor) movementsFound = true;
        let bottomBlock = boardBlocks.find(block => block.row === boardBlock.row + 1 && block.column === boardBlock.column);
        if(bottomBlock && bottomBlock.boxcolor === boardBlock.boxcolor) movementsFound = true;
        let rightBlock = boardBlocks.find(block => block.row === boardBlock.row && block.column === boardBlock.column + 1);
        if(rightBlock && rightBlock.boxcolor === boardBlock.boxcolor) movementsFound = true;

        if(movementsFound) return false;
        else return true;
    });
    return movementsFound;
};