import styled from 'styled-components';

export const BoardPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const BoardScore = styled.p`
    font-size: 1.2rem;
    margin: 0;
    margin-bottom: 50px;
    span {
        font-size: 1.4rem;
        color: ${props => props.theme.customBlue};
    }
`;

export const BoardBlocksContainer = styled.div`
    display: grid;
    ${props => `grid-template-rows: repeat(${props.rows}, ${100 / props.rows}%); grid-template-columns: repeat(${props.columns}, ${100 / props.columns}%);`}
    width: 500px;
    height: 500px;
    border: 1px solid ${props => props.theme.dark};
`;