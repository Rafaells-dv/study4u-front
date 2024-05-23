import styled from "styled-components";

export const Introduction = styled.section`
    height: 86vh;
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 1rem;

    article {
        justify-content: left;
        margin-left: 3rem;
    }

    p {
        max-width: 500px;
        text-align: left;
        font-family: "Josefin Sans", sans-serif;
        color: var(--dark-blue-2);
        font-size: 24px;
        margin-left: 50px;
    }

    h1 {
        color: var(--dark-blue-2);
        text-align: left;
        margin-left: 50px;
        font-size: 30px;
    }

    img{
        position: relative;
        max-width: 40%;
        left: 5%;
    }

    html, body {
        overflow-x: hidden;
    }
`;

export const Resources = styled.section`
    height: 100vh;
    background-color: var(--white);
    padding: 50px 0;
    min-height: calc(100vh - 500px);
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        color: var(--dark-blue-2);
        text-align: left;
        margin-left: 160px;
        top: 0; 
        padding: 50px 0; 
        width: 100%;
`;

export const ResourcesContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        flex: 1;
        max-width: 300px;
    }

    img {
        width: 200px;
        height: 300px;
        padding-top: 70px;
        padding-bottom: 40px;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--dark-blue-2);
    }

    p {
        font-size: 20px;
        color: var(--dark-blue-2);
        text-align: center;
        margin-bottom: 20px;
        margin-top: 20px;
    } 
`;

export const Depositions = styled.section`
    height: 100vh;
    text-align: center;
    padding: 2rem;

    h1 {
        color: var(--dark-blue-2);
        text-align: left;
        margin-left: 50px;
        font-size: 30px;
    }
`;

export const DepositionsContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    > :first-child {
        position: relative;
        left: 3%;
        z-index: 10;
    }
    
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    div > img{
        width: 180px;
        height: 180px;
        margin-top: 6rem;
        margin-bottom: 2rem;
    }

    p {
        max-width: 500px;
        font-size: 1.3rem;
        color: var(--dark-blue-2);
        margin-bottom: 2rem;
    }

    .icon {
        height: 100px;
    }


`;