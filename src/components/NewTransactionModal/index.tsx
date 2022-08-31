import Modal from 'react-modal';
import {Container, TransactionTypeContainer, RadioBox} from './styles';
import closeImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import CalendarImg from '../../assets/calendar.png';
import ValueImg from '../../assets/value.png'
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState, useContext } from 'react';
import { api } from '../../services/api';
import { useTransactions } from '../../hooks/useTransactions';
// import { TransactionsContext } from '../../hooks/useTransactions';


interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps){

    const {createTransaction} = useTransactions();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleNewCreateTransaction(event: FormEvent){
        event.preventDefault();   

        await createTransaction ({
            title, 
            amount, 
            category,
            type
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }
      
    return(
        <Modal 
          isOpen={isOpen} 
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar Modal" />
            </button>

            <Container onSubmit={handleNewCreateTransaction}>
                <div className="header-modal">
                    <img src={CalendarImg} alt="calendar" />
                    <h2>Cadastrar Transação</h2>
                </div>

                {/* CORPO DO MODAL */}
                <div className="value-modal">
                    <img src={ValueImg} alt="value"/>
                    <span>Data da Transação</span>
                    <input
                        className='input-modal-total'
                        placeholder='Ex: 01/01/2022'
                        value={title}
                        // VERIFICAR A DATATYPE AQUI EM CIMA NO LUGAR DO TITLE
                        onChange={event => setTitle(event.target.value)}
                    />
                </div>

                <div className="value-modal">
                    <img src={ValueImg} alt="value"/>
                    <span>Data da Transação</span>
                    <input
                        placeholder='Categoria'
                        value={category}
                        onChange={event => setCategory(event.target.value)}
                    />
                </div>
                
                <div className="value-modal">
                    <img src={ValueImg} alt="value"/>
                    <span>Descrição</span>
                    <input
                        className='input-modal-total'
                        placeholder='Ex: Energia Elétrica'
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                </div>                
                <div>
                    <img src={ValueImg} alt="value"/>
                    <span>Descrição</span>
                    <input
                        type="number"
                        placeholder='Valor'
                        value={amount}
                        onChange={event => setAmount(Number(event.target.value))}
                    />
                </div>
                

                <TransactionTypeContainer>
                    <RadioBox 
                        type='button' 
                        onClick={() => {setType('deposit');}}
                        isActive={type === 'deposit'}
                        activeColor="green"
                        // className={type === 'deposit' ? 'active':''}
                    >
                        <img src={IncomeImg} alt="Entradas" />
                        <span>Receitas</span>
                    </RadioBox>
                    <RadioBox 
                        type='button'
                        onClick={() => {setType('withdraw');}} 
                        activeColor="red"
                        isActive={type === 'withdraw'}>
                        <img src={outcomeImg} alt="Saidas" />
                        <span>Despesas</span>
                    </RadioBox>
                </TransactionTypeContainer>

                
                <button type="submit">
                    Realizar Lançamento
                </button>
            </Container>
          
        </Modal>
    );
}