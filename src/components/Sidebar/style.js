import styled from "styled-components";

export const Nav = styled.nav`
    height: 100%;
    background-color: var(--dark-blue-2);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    color: var(--blue-light);

    div {
        height: 15%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 1rem;
    }
`;