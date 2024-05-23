import styled from "styled-components";

const NavButton = styled.button`
    background-color: var(--dark-blue-2);
    padding: 0 1rem;
    border-radius: 1rem;
    border: none;
    color: var(--blue-light);
    cursor: pointer;
    font-size: 1rem;

    &:hover {
        background-color: #C5D5EA;
        color: #7392B7;
    }
`;


export default NavButton