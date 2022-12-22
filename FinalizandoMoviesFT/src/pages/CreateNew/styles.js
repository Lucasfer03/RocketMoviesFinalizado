import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;


    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto ;
    }

    .marcadores {
        display: grid;
        grid-template-columns: 180px 180px;
        gap: 40px;
    }
`;

export const Form = styled.form`
    max-width: 1120px;
    margin: 38px auto;

    > header {
        margin-bottom: 40px;
    }  

    > div {
        display: grid;
        grid-template-columns: auto auto;
        gap: 40px;
        margin-bottom: 40px;
    }
`;

