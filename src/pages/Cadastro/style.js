import styled from "styled-components"

export const Form = styled.form`
    margin-top: 50px;
    background-color: var(--white);
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 5rem;
    align-items: center;

    p {
        font-size: 2.3rem;
        padding-top: 2.8rem;
        color: var(--dark-blue-2);
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70%;
    }

    .cadastro-input {
        width: 60%;
        align-self: center;
    }
`;