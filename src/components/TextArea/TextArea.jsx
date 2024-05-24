import styled from "styled-components";

export const TextArea = styled.textarea`
    background-color: var(--gray);
    margin: 1rem;
    padding: 0.9rem;
    border-radius: 1rem;
    border-style: none;
    font-size: 1.5rem;

    &:focus {
        outline: var(--blue-light) solid;
        background-color: var(--white);
    }
`;