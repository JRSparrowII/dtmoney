import { useState } from 'react';
import receitaImg from '../../assets/receita.png'
import { Container, Content } from './styles'
import Modal from 'react-modal';

interface MenuProps{
    onOpenNewTransactionModal: () => void;
}

export function Menu({onOpenNewTransactionModal}: MenuProps){    

    return(
        <Container>
            {/* <Content> */}
                <div className="app">        
                    <aside className="menu-container">
                        <div className="menu-header">                            
                            <p> Henrique</p>
                        </div>
                        <nav className="menu-content">
                            <button 
                                className="menu-button" 
                                type="button"
                                onClick={onOpenNewTransactionModal}>
                                <img src={receitaImg} alt="receita" />
                                
                                <span>Nova Transação</span> 
                            </button>
                            <button className="menu-button" type="button">
                                {/* <img src="img/saida.png" alt=""> */}
                                <span>Nova Despesas</span> 
                            </button>
                            <button className="menu-button" type="button">
                                {/* <img src="img/home.png" alt="home"> */}
                                <span>Cartão de Crédito</span> 
                            </button>
                            <button className="menu-button" type="button">
                                {/* <img src="img/wallet.png" alt="wallet"> */}
                                <a href="gastosmensais.html"></a>
                                <span>Contas a Receber</span>                     
                            </button>
                            <button className="menu-button" type="button">
                                {/* <img src="img/receber.png" alt="receber"> */}
                                <span>Contas a Pagar</span> 
                            </button>
                            <button className="menu-button" type="button">
                                {/* <img src="img/saida.png" alt=""> */}
                                <span>Pagar</span> 
                            </button>                
                        </nav>
                    </aside>
                </div>
            {/* </Content> */}
        </Container>
    );
}
