import styled from 'styled-components';

export const Container = styled.main`
max-width: 1500px;
margin: 0 auto;
padding: 2.5rem 1rem;
/* display: flex;
align-items: flex-start; */

.app {
    width: 100%;
    max-width: 1500px;
    /* padding: 5% 0;
    margin: 0 auto;
    padding-top: 15px;
    display: flex;
    align-items: flex-start;     */
}


/* MENUS */
.menu-container{
    background-color: white;
    width: 20%;
    height: 500px;
    /* margin-top: 30px; */
    border-radius: 5px;
    padding: 20px 20px 0 20px; 
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

`;