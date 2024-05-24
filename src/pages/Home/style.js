import styled from "styled-components";

export const HomeContainer = styled.div`
    margin: 2rem;
    border-radius: 1rem;
    width: 100%;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
`;

export const HomeInputs = styled.div`
    width: 100%;
    margin: 2rem 0;
    display: flex;
    justify-content: space-around;

    input {
        width: 70%;
        height: 70%;
        align-self: center;
    }
`;

export const GrupoSalas = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin: 2rem;
`;

export const SalasNotFound = styled.div`
    grid-column: 2/3;
    text-align: center;
    font-size: 3rem;
    margin-top: 4rem;
    color: var(--dark-blue-3);
`;