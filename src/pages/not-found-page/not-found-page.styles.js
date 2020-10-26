import styled from 'styled-components';

export const NotFoundPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 70px;
    p {
        font-size: 4rem;
        color: ${props => props.theme.customRed};
        margin-bottom: 30px;
    }
`;