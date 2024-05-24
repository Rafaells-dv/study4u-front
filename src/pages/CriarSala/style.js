import styled from "styled-components";

export const Form = styled.form`
    margin: 2rem;
    padding-bottom: 2rem;
    border-radius: 1rem;
    width: 100%;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        padding-bottom: 2rem;
        color: var(--dark-blue-2);
        font-size: 4rem;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 50%;
    width: 50%;

    * {
        margin: 1rem;
        padding: 1rem;
    }

    input {
        width: 100%;
        height: 10%;
        font-size: 1.8rem;
    }

    textarea {
        width: 100%;
        height: 60%;
        background-color: var(--gray);
        margin: 1rem;
        padding: 0.9rem;
        border-radius: 1rem;
        border-style: none;
        font-size: 1.5rem;
    }

    textarea:focus {
        outline: var(--blue-light) solid;
        background-color: var(--white);
    }

    button {
        width: 60%;
    }


`;