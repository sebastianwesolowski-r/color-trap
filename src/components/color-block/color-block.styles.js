import styled from 'styled-components';

export const ColorBlockContainer = styled.div`
    background-color: ${props => props.boxcolor};
    cursor: pointer;
    border: 1px solid ${props => props.theme.dark};
`;