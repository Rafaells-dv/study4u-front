import styled from "styled-components";

const Button = styled.button`
    background-color: var(--dark-blue-2);
    color: var(--white);
    padding: 1.2rem;
    border-radius: 2rem;
    border: 0 solid none;
    border-style: none;
    cursor: pointer;

    &:hover {
        background-color: var(--dark-blue-3);
        color: var(--white);
    }
`;

export default Button