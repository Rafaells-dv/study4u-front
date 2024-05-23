import styled from "styled-components";

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    margin: 0 15rem 5rem 15rem;

    h1 {
        font-size: 3rem;
        color: var(--dark-blue-3);
        padding-bottom: 2rem;
    }

    p {
        font-size: 1.5rem;
        padding-left: 1rem;
        padding-bottom: 1rem;
        color: var(--dark-blue-3);
    }

    p:last-of-type {
        font-size: 1rem;
    }
`;