import { Container } from "./Styles";
import { useTransactions } from '../../hooks/useTransactions';
// import { useContext } from 'react'

export function TransactionsTable(){

    const {transactions} = useTransactions();  

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Data da Lançamento</th>
                        <th>Classificação</th>
                        <th>Conta</th>
                        <th>Forma de Pagamento</th>
                        <th>Banco</th>
                        <th>Valor</th>
                        <th>Histórico</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction =>{
                        return(
                            <tr key={transaction.id}>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(                              
                                        new Date(transaction.createdAt)
                                    )}                                      
                                </td>
                                <td>{transaction.category}</td>                                
                                <td className="newtransiction">{transaction.title}</td>
                                <td>{transaction.paymentMethod}</td>
                                <td>{transaction.bank}</td>
                                <td className={transaction.type}>
                                    {/* FORMATAÇÃO EM REAIS */}
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}                                    
                                </td>                                
                                <td>{transaction.historic}</td>   
                                <td>{transaction.actions}</td>          
                                
                            </tr>  
                        )
                    })}
                                     
                </tbody>
            </table>
        </Container>
    );
}