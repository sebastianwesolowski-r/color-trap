import styled from 'styled-components';

export const BanerContainer = styled.p`
    font-size: 3.8rem;
    letter-spacing: 5px;
    margin: 0 auto;
    margin-bottom: 40px;
    @media (max-width: 800px) {
        font-size: 2.8rem;
        margin-bottom: 20px;
    }
`;

export const FirstLetter = styled.span`
    color: ${props => props.theme.customRed};
`;

export const SecondLetter = styled.span`
    color: ${props => props.theme.customYellow};
`;

export const ThirdLetter = styled.span`
    color: ${props => props.theme.customGreen};
`;

export const FourthLetter = styled.span`
    color: ${props => props.theme.customBlue};
`;

export const FifthLetter = styled.span`
    color: ${props => props.theme.customPurple};
`;

export const SixthLetter = styled.span`
    color: ${props => props.theme.customGreen};
`;

export const SeventhLetter = styled.span`
    color: ${props => props.theme.customBlue};
`;

export const EighthLetter = styled.span`
    color: ${props => props.theme.customPurple};
`;

export const NinthLetter = styled.span`
    color: ${props => props.theme.customRed};
`;