import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {BoardPageContainer, BoardScore, BoardBlocksContainer} from './board-page.styles';

import ColorBlock from '../../components/color-block/color-block.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {generateBlocks, checkIfTheGameIsPossible} from '../../utils/utils';

import {setBoardBlocks, endGame} from '../../redux/game/game-actions';
import {selectScore, selectBoardSettings, selectBoardBlocks} from '../../redux/game/game-selectors';

const BoardPage = ({score, boardSettings, boardBlocks, setBoardBlocks, endGame}) => {
    const didMountRef = useRef(false);
    const {rows, columns} = boardSettings;

    useEffect(() => {
        const blocks = generateBlocks(rows, columns);
        setBoardBlocks(blocks);
    }, []);

    useEffect(() => {
        if(didMountRef.current) {
            const isGamePossible = checkIfTheGameIsPossible(boardBlocks);
            if(!isGamePossible) {
                setTimeout(function() {
                    alert("No possible movement remained. Game Over.");
                    return endGame();
                }, 10);
            }
        } else {
            didMountRef.current = true;
        }
    }, [boardBlocks]);

    return (
        <BoardPageContainer>
            <BoardScore>Your score: <span>{score}</span></BoardScore>
            <BoardBlocksContainer rows={rows} columns={columns}>
                {
                    boardBlocks.map(({key, row, column, boxcolor, hitblock}) => <ColorBlock key={key} row={row} column={column} boxcolor={boxcolor} hitblock={hitblock} />)
                }
            </BoardBlocksContainer>
            <CustomButton onClick={endGame}>
                FINISH
            </CustomButton>
        </BoardPageContainer>
    );
};

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