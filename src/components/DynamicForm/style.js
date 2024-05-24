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
        height: 400px;
    }

    button {
        width: 60%;
    }

    #Cancelar {
        background-color: var(--red) !important;
    }

`;