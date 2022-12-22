import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

export const Brand = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 80px;
    align-items: center;

    > h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 32px;
    }
`;

export const NewMovie = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 200px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;
    border-radius: 8px;
    color: black;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1210px;
    margin-left: 80px;
    overflow-y: auto;
`;
