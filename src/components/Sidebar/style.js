import styled from "styled-components";

export const Nav = styled.nav`
  width: 130px;
  height: 100vh;
  background-color: var(--dark-blue-2);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  color: var(--blue-light);
  position: fixed;
  top: 0;
  left: 0;

  div {
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
  }
`;
