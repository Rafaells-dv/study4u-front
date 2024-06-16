import styled from "styled-components";

export const SalaContainer = styled.div`
  margin: 2rem;
  border-radius: 1rem;
  width: 90%;
  height: 100%;
  background-color: var(--white);
  display: flex;
  flex-direction: column;

  article {
    padding-left: 10rem;
    padding-right: 10rem;
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    color: var(--dark-blue-3);
  }

  p {
    color: var(--dark-blue-2);
    font-size: 1.3rem;
  }

  .detail-line {
    display: flex;
  }

  .detail-line > :first-child {
    color: var(--dark-blue-3) !important;
    margin-right: 1rem;
  }
`;

export const Conteudos = styled.div`
  margin: 2rem 2rem 0 2rem;
  padding: 3rem;
  border-top: 2px solid var(--dark-blue-3);
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(100px, auto);
  gap: 10px;
  row-gap: 2rem;
  justify-items: center;
  align-items: center;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 6rem;
  margin-left: 6rem;
  margin-bottom: 5rem;
  justify-self: end;
  margin-top: auto;

  > :first-child {
    align-self: flex-start;
  }

  div {
    display: flex;
    align-items: center;
  }

  div > button {
    background-color: var(--red) !important;
  }
`;
