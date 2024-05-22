import styled from 'styled-components'

export const Nav = styled.nav`
    background-color: var(--dark-blue-2);
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    color: var(--blue-light);

    #headerTitle {
        transition: 0.5s;
        font-size: 2rem;
    }
    
    #headerTitle:hover {
        color: var(--white);
    }
`