import styled from "styled-components";

export const Input = styled.input`
    background-color: var(--gray);
    margin: 1rem;
    padding: 0.9rem;
    border-radius: 1rem;
    border-style: none;

    &:focus {
        transition: 0.1s;
        outline: var(--blue-light) solid;
        background-color: var(--white);
    }
`;	