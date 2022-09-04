// import { Container } from "../Header/styles";
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable/Index';
import {Container} from './styles';
import { Menu} from '../Menu';

export function Dashboard(){
    return(
        <Container> 
            <Menu/> 
            <div className="container-dashboard">
                <Summary/> 
                <div className="container-dashboard-grafico">
                    <h1>Grafico</h1>
                </div>
            </div>                   
              
            {/* <TransactionsTable/>                             */}
        </Container>
    );
}