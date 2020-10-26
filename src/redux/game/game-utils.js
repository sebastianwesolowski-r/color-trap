export const showFireOnBlocks = (boardBlocks, payload) => {
    const {hitblocks, fireOption} = payload;
    hitblocks.forEach(hitBlock => {
        let hitBlockSource = boardBlocks.findIndex(boardBlock => boardBlock.row === hitBlock.row && boardBlock.column === hitBlock.column);
        boardBlocks[hitBlockSource].hitblock = fireOption;
    });
    return [...boardBlocks];
};