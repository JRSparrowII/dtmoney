import styled from 'styled-components';

export const Container = styled.header`
background: var(--green);
`;

export const Content = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;        
        border: none;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.2s;

        cursor: pointer;
        background: linear-gradient(to right,#42E695 0%,#3BB2B8 50%,#42E695 100%);
        color: #fff;
        background-size: 200% auto;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;