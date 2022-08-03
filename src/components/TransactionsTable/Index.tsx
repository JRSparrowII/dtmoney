import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./Styles";

export function TransactionsTable(){

    useEffect(() => {
        api.get('transactions')        
        .then(response => console.log(response.data))
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="newtransiction">Projetos Gennesis</td>
                        <td className="deposit">300,00</td>
                        <td>Receitas</td>
                        <td>02/08/2022</td>
                    </tr>
                    <tr>
                        <td>Compra de queijo</td>
                        <td className="withdraw"> -50,00</td>
                        <td>Supermercado</td>
                        <td>02/08/2022</td>
                    </tr>
                    <tr>
                        <td>Salão de Beleza</td>
                        <td> -100,00</td>
                        <td>Pessoais</td>
                        <td>09/08/2022</td>
                    </tr>
                    <tr>
                        <td>Energia</td>
                        <td> -50,00</td>
                        <td>Casa</td>
                        <td>12/08/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}