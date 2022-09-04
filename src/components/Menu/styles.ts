import styled from 'styled-components';

export const Container = styled.menu`

  /* MENUS */
.menu-container{
    background-color: white;
    width: 120%;
    
    height: auto;
    /* margin-top: 30px; */
    border-radius: 5px;
    padding: 20px 20px 20px 20px; 
    -webkit-box-shadow: 0 0 4px 0 rgb(0 0 0 / 30%)   
}

.menu-header{
    color: #6194A0;
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    align-items: center;
    justify-content: left;
    padding: 0 0 10px 10px;
    display: flex;
    border-bottom: 1px solid lightgray;
    gap: 7px;
    margin-top: 5px;
}

.menu-content{
    display: flex;
    flex-direction: column;    
    margin-top: 20px; 
}

.menu-button{
    border-radius: 5px;
    margin: 5px 0 5px 0;
    border: none;
    height: 2.5rem;
    /* background-color: #42E695; */
    background-color: #F7FBFC;
    color: #6194A0;
    font-size: 15px;
    font-weight: 600;
    text-align: left;
    padding: 5px 0px 5px 20px; 
    align-items: center;
}

.menu-button:hover{
    background-color: #6194A0;
    color: #F7FBFC;
    cursor: pointer;
    border: none;
}

  /* max-width: 1500px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: none;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    } */
    /* background: blue; */
`;

export const Content = styled.div`
    
`;