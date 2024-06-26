import styled from "styled-components";

const Button = styled.button`
    background-color: var(--dark-blue-2);
    color: var(--white);
    margin: 1rem;
    padding: 0.9rem;
    border-radius: 2rem;
    border: 0 solid none;
    border-style: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    font-family: "Josefin Sans", Sans Serif;

    &:hover {
        background-color: var(--dark-blue-3);
        color: var(--white);
    }
`;

export default Button