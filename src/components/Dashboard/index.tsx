// import { Container } from "../Header/styles";
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable/Index';
import {Container} from './styles';
import { Menu} from '../Menu';

export function Dashboard(){
    return(
        <Container>    
            <Menu/>        
            <Summary/>   
            <TransactionsTable/>                            
        </Container>
    );
}