import React, {useState} from 'react';
import {connect} from 'react-redux';

import {StartPageContainer, SettingsPanel} from './start-page.styles';

import CustomSelector from '../../components/custom-selector/custom-selector.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {startGame} from '../../redux/game/game-actions';

const StartPage = ({startGame}) => {

    const [boardSettings, setBoardSettings] = useState({rows: 3, columns: 3});
    const {rows, columns} = boardSettings;

    const handleBoardChange = e => {
        const {name, value} = e.target;
        setBoardSettings({...boardSettings, [name]: parseInt(value)});
    };

    const startTheGame = () => {
        if(rows < 3 || rows > 12 || columns < 3 || columns > 12) {
            return alert("Maximum range of board settings are 3-12");
        };
        startGame(boardSettings);
    };

    return (
        <StartPageContainer>
            <SettingsPanel style={{marginTop: "120px"}}>
                <span>ROWS</span>
                <CustomSelector name="rows" value={rows} onChange={handleBoardChange} required/>
            </SettingsPanel>
            <SettingsPanel>
                <span>COLUMNS</span>
                <CustomSelector name="columns" value={columns} onChange={handleBoardChange} required/>
            </SettingsPanel>
            <CustomButton onClick={startTheGame}>
                PLAY
            </CustomButton>
        </StartPageContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    startGame: boardSettings => dispatch(startGame(boardSettings))
});

export default connect(null, mapDispatchToProps)(StartPage);