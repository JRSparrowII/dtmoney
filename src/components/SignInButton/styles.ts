import styled from 'styled-components'

export const Container = styled.form`

    .signInButton{
        height: 3rem;
        border-radius: 3rem;
        background: var(--gray-850);
        border: none;
        padding: 0.8rem 1.5rem;


        display: flex;
        text-align: center;
        justify-content: center;

        color: var(--white);
        font-weight: bold;

        svg{
            width: 20px;
            height: 20px;
        }

        svg:first-child{
            margin-right: 1rem;
        }

        svg.closeIcon{
            margin-left: 1rem;
        }

        transition: filter 0.2s;

        &:hover{
            cursor: pointer;
            filter: brightness(0.8);
        }
    }

`;