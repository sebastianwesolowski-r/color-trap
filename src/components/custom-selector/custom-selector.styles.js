import styled from 'styled-components';

export const CustomSelectorContainer = styled.input`
    width: 75px;
    height: 35px;
    font-size: 1.1rem;
    color: ${props => props.name === "rows" ? props.theme.customRed : props.theme.customBlue};
    border: 1px solid ${props => props.theme.dark};
    padding-left: 15px;
    background: transparent;
    outline: none;
`;