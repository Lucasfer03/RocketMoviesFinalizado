import styled from 'styled-components';

export const Container = styled.div`
  width:  100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
  }

`;

export const Content = styled.div`
  max-width: 1140px;
  height: 505px;
  margin-top: 40px;
  margin-left: 110px;
  margin-right: 110px;
  margin-bottom: 250px;
`;

export const Avaliation = styled.div`
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const PersonAvaliator = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  > img { 
  width: 16px;
  height: 16px;
  border-radius: 50%;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
    font-size: 16px;
    margin-right: 5px;
    margin-left: 5px;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
    font-size: 16px;
    margin-right: 5px;
  }
  `;

export const TagArea = styled.div`
  margin-top: 40px;
`;

export const MovieDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
  margin-top: 40px;
`;