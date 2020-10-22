import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
    width: 140px;
    height: 45px;
    color: ${props => props.theme.customPurple};
    font-size: 1.2rem;
    background: transparent;
    outline: none;
    cursor: pointer;
    border: 2px solid ${props => props.theme.customPurple};
    margin-top: 40px;
    transition-duration: 100ms;
    &:hover {
        background-color: ${props => props.theme.customPurple};
        color: #FFFFFF;
    }
`;