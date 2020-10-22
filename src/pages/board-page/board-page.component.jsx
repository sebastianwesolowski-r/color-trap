import React, {useEffect,} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {BoardPageContainer, BoardScore, BoardBlocksContainer} from './board-page.styles';

import ColorBlock from '../../components/color-block/color-block.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {generateBlocks} from '../../utils/utils';

import {setBoardBlocks, endGame} from '../../redux/game/game-actions';
import {selectScore, selectBoardSettings, selectBoardBlocks} from '../../redux/game/game-selectors';

const BoardPage = ({score, boardSettings, boardBlocks, setBoardBlocks, endGame}) => {
    const {rows, columns} = boardSettings;

    useEffect(() => {
        const blocks = generateBlocks(rows, columns);
        setBoardBlocks(blocks);
    }, []);

    return (
        <BoardPageContainer>
            <BoardScore>Your score: <span>{score}</span></BoardScore>
            <BoardBlocksContainer rows={rows} columns={columns}>
                {
                    boardBlocks.map(({key, row, column, boxcolor}) => <ColorBlock key={key} row={row} column={column} boxcolor={boxcolor} />)
                }
            </BoardBlocksContainer>
            <CustomButton onClick={endGame}>
                FINISH
            </CustomButton>
        </BoardPageContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    score: selectScore,
    boardSettings: selectBoardSettings,
    boardBlocks: selectBoardBlocks
});

const mapDispatchToProps = dispatch => ({
    setBoardBlocks: boardBlocks => dispatch(setBoardBlocks(boardBlocks)),
    endGame: () => dispatch(endGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardPage);