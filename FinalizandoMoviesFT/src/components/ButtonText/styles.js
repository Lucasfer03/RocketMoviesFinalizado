import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    border: none;
    font-size: 16px;
    margin-bottom: 24px;
    margin-top: 40px;
`;