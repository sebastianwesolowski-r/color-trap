import React from 'react';
import {withRouter} from 'react-router-dom';

import {NotFoundPageContainer} from './not-found-page.styles';

import CustomButton from '../../components/custom-button/custom-button.component';

const NotFoundPage = ({history}) => (
    <NotFoundPageContainer>
        <p>404</p>
        <CustomButton onClick={() => history.push("/")}>
            BACK
        </CustomButton>
    </NotFoundPageContainer>
);

export default withRouter(NotFoundPage);