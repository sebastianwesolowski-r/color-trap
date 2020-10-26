import styled from 'styled-components';

export const ColorBlockContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.boxcolor};
    cursor: pointer;
    border: 1px solid ${props => props.theme.dark};
`;