import styled from "styled-components";

const Loader = styled.div`
    height: 8rem;
    width: 8rem;
    border-style: solid;
    border-color: var(--dark-blue-3);
    border-width: 5px;
    border-top-color: var(--dark-blue-2);
    border-radius: 50%;

    animation: spin 2s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
}
`;


export default Loader