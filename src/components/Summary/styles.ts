import styled from 'styled-components'; 

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 5px 10px 5px 10px;      

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
    }

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong{
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
        color: var(--text-title);
    }

    .totalGeral{
        background-color: var(--green);
        color: #fff;
    }

    .despesas{
        background-color: var(--red);
        color: #fff;
    }

    .saldo{
        background-color: var(--yelow);
        color: #fff;
    }

    .receitas{
        background-color: var(--blue-light);
        color: #fff;
    }
`;