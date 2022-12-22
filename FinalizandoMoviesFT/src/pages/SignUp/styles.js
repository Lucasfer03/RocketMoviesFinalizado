import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    > h1 {
        align-self: flex-start;
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
        align-self: flex-start;
        color: ${({ theme }) => theme.COLORS_SUBTITLE};
        font-size: 15px;
    }

    > h2 {
        align-self: flex-start;
        font-size: 24px;
        margin-top: 84px;
        margin-bottom: 48px;
        color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
    }

    > a {
        margin-top: 42px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;