import styled from 'styled-components'

export const Container = styled.form`
    h1{
      
    }

    .header-modal{        
        color: var(--text-body);
        font-size: 1rem;
        margin-bottom: 2rem; 
        padding-bottom: 1rem;
        display: flex;
        align-items: left;
        gap: 10px;

        border-bottom: 2px solid #d7d7d7;
    }

    .value-modal{
        gap: 20px;
        color: var(--text-body);
    }

    .input-modal{  
        margin: 1rem 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;  
    }

    input {
        width: 100%;
        padding: 10px 1.5rem;
        height: 3.5rem;
        border-radius: 0.25rem;
        background: #e7e9ee;
        border: 1px solid #d7d7d7;
        font-weight: 400;
        font-size: 1rem;    

        &::placeholder{
            color: var(--text-body);            
        }

        & + input{
            margin-top: 1rem;
        }
    }

    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--blue-light);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1.3rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        font-weight: 600;       
        
        &:hover{
            filter: brightness(0.9);            
        }

    }

`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;   
`;

interface RadioBoxProps{
    isActive: boolean;
    activeColor: 'green' | 'red';
}        

const colors = {
    green:'#e1ede0',
    red:'#f4b6b3'    
};

export const RadioBox = styled.button<RadioBoxProps>`
    
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: ${(props) => props.isActive ? colors[props.activeColor] : 'transparent'};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        cursor: pointer;
    }    

    img{
        height: 20px;
        width: 20px;        
    }

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`;