import React from 'react';

import {CustomSelectorContainer} from './custom-selector.styles';

const CustomSelector = ({...otherProps}) => (
    <CustomSelectorContainer type="number" min="3" max="12" {...otherProps}/>
);

export default CustomSelector;