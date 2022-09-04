import Modal from 'react-modal';
import {Container, TransactionTypeContainer, RadioBox} from './styles';
import closeImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import CalendarImg from '../../assets/calendar.png';
import ValueImg from '../../assets/value.png'; 
import DateImg from '../../assets/date.png'; 
import ValorImg from '../../assets/valor.png';
import ContaImg from '../../assets/conta.png'; 
import HistoricoImg from '../../assets/historico.png';
import CategoryImg from '../../assets/category.png';
import FormapgtoImg from '../../assets/formapgto.png';
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

                <span>Escolha o tipo de transação que deseja realizar:</span>
                <TransactionTypeContainer>
                    <RadioBox 
                        type='button' 
                        onClick={() => {setType('deposit');}}
                        isActive={type === 'deposit'}
                        activeColor="green"
                        className={type === 'deposit' ? 'active':''}
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

                {/* CORPO DO MODAL */}
                <div className="input-modal">                
                    <div>
                        <img src={DateImg} alt="value"/>
                        <span>Data da Transação</span>
                        <input
                            className='input-modal-total'
                            placeholder='dd/mm/aaaa'
                            value={title}
                            // VERIFICAR A DATATYPE AQUI EM CIMA NO LUGAR DO TITLE
                            onChange={event => setTitle(event.target.value)}
                        />
                    </div>

                    <div>
                        <img src={CategoryImg} alt="value"/>
                        <span>Categoria</span>
                        <input
                            placeholder='Ex: Alimentação'
                            value={category}
                            onChange={event => setCategory(event.target.value)}
                        />
                    </div>
                </div>

                <div className="input-modal">                  
                    <div>
                        <img src={ContaImg} alt="conta"/>
                        <span>Conta</span>
                        <input
                            className='input-modal-total'
                            placeholder='Ex: Energia Elétrica'
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                        />
                    </div>                
                    <div>
                        <img src={FormapgtoImg} alt="pgto"/>
                        <span>Forma de Pagamento</span>
                        <input
                            placeholder='Ex: À vista'
                            value={category}
                            onChange={event => setCategory(event.target.value)}
                        />
                    </div>
                </div>       

                <div className="input-modal">                  
                    <div>
                        <img src={ValueImg} alt="value"/>
                        <span>Banco</span>
                        <input
                            className='input-modal-total'
                            placeholder='Ex: Banco do Brasil'
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                        />
                    </div>                
                    <div>
                        <img src={ValorImg} alt="valor"/>
                        <span>Valor</span>
                        <input
                            placeholder='R$ 0,00'
                            value={category}
                            onChange={event => setCategory(event.target.value)}
                        />
                    </div>
                </div>  

                <div>
                    <img src={HistoricoImg} alt="historico"/>
                    <span>Histórico</span>
                    <input
                        placeholder='Ex: Pagamento da Energia Elétrica'
                        value={category}
                        onChange={event => setCategory(event.target.value)}
                    />
                </div>          
                
                <button type="submit">
                    Realizar Lançamento
                </button>
            </Container>
          
        </Modal>
    );
}