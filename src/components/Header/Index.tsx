import { useState } from 'react';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import Modal from 'react-modal';

interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps){

    // const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    // function handleOpenNewTransactionModal(){
    //     setIsNewTransactionModalOpen(true);
    // }

    // function handleCloseNewTransactionModal(){
    //     setIsNewTransactionModalOpen(false);
    // }

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney" />
                <button 
                    type="button" 
                    onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
                {/* <Modal 
                    isOpen={isNewTransactionModalOpen} 
                    onRequestClose={handleCloseNewTransactionModal}
                >
                    <h2>Cadastrar Transação</h2>
                </Modal> */}
            </Content>
        </Container>
    )
}
