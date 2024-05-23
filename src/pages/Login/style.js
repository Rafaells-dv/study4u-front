import styled from "styled-components";

export const Form = styled.form`
    height: 60%;
    width: 80%;
    background-color: var(--white);
    border-radius: 4rem;
    padding: 2rem;
    display: flex;
    justify-content: space-between;

    article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        margin-left: 5rem;
        margin-bottom: 2rem;
        color: var(--dark-blue-2);
        font-size: 2rem;
    }
`;

export const ContainerInput = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 5rem;

    p {
        align-self: center;
        color: var(--dark-blue-2);
        font-size: 1.5rem;
    }

    div {
        align-self: center;
        font-size: small;
        color: var(--dark-blue-2);
        text-decoration: none;
        width: 70%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
    }

    input, button {
        width: 90%;
    }

    a {
        padding: 0.5rem;
    }

`;