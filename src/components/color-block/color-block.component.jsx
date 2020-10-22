import React from 'react';

import {ColorBlockContainer} from './color-block.styles';

import {handleBlockClick} from '../../utils/utils';

const ColorBlock = ({row, column, boxcolor}) => (
    <ColorBlockContainer boxcolor={boxcolor} onClick={() => handleBlockClick({row, column, boxcolor})} />
);

export default ColorBlock;