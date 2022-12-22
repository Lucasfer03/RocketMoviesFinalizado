import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};


  display: flex;
  justify-content: space-between;

  padding: 0 80px;

> h1 {
  display: flex;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.COLORS.PINK};
  margin-right: 64px;
  text-align: center;
  align-items: center;
}
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 64px;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;


  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    text-align: end;
    align-items: flex-end;
    margin-right: 16px;
    line-height: 24px;

    button {
      padding: 0;
      margin: 0;
      border: none;
      background: none;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY};
    }

    span {
        font-size: 18px;
        color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
    }
  }
`;