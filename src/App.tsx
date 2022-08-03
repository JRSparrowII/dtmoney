import styled from 'styled-components'
import { Dashboard } from './components/Dashboard/index';
import { Header } from './components/Header/Index';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { useState } from 'react';

// const Title = styled.h1`
// color: #8257e6;
// font-size: 32px;
// `

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }


  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <Modal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloseNewTransactionModal}
      >
          <h2>Cadastrar Transação</h2>
      </Modal>
      <GlobalStyle/>
    </>
  );
}

// export default App;
