import styled from "styled-components";

export const FormContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    background-color: var(--white);
    height: 20%;
    width: 40%;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    * {
        margin: 1rem;
        padding: 1rem;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--dark-blue-3);
    }

    div {
        display: flex;
        justify-content: space-between;
        width: 50%;
    }

    button {
        width: 60%;
    }

    #Sim {
        background-color: var(--red) !important;
    }

    #Sim:hover {
        background-color: var(--dark-red) !important;
    }

`;