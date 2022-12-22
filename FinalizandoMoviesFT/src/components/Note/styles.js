import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    border: none;
    padding: 22px;
    margin-bottom: 24px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
    }

    > p {
        text-align: left;
        color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;

export const Stars = styled.div`
    max-width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-top: 8px;
    margin-bottom: 16px;
`;