import { useState } from 'react';
import logoImg from '../../assets/logo.png'
import { Container, Content } from './styles'
import Modal from 'react-modal';
import { SignInButton } from '../SignInButton';

interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps){    

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="MMM" />
                {/* <p>My Manager Money</p> */}
                <button 
                    type="button" 
                    onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>  
                {/* <SignInButton /> */}
            </Content>
        </Container>
    )
}
