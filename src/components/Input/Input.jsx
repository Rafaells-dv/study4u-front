import styled from "styled-components";

export const Input = styled.input`
    background-color: var(--gray);
    margin: 1rem;
    padding: 0.9rem;
    border-radius: 1rem;
    border-style: none;
    transition: 0.3s ease-in;

    &:focus {
        outline: var(--blue-light) solid;
        background-color: var(--white);
        transition: 0.1s ease-out;
    }
`;	