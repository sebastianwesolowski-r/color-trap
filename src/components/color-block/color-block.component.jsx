import React from 'react';

import {ReactComponent as FireIcon} from '../../assets/fire.svg';

import {ColorBlockContainer} from './color-block.styles';

import {handleBlockClick} from '../../utils/utils';

const ColorBlock = ({row, column, boxcolor, hitblock}) => (
    <ColorBlockContainer boxcolor={boxcolor} onClick={() => handleBlockClick({row, column, boxcolor}, true)}>
        {
            hitblock ? (
                <FireIcon />
            ) : null
        }
    </ColorBlockContainer>
);

export default ColorBlock;