import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {createServer, Model} from 'miragejs';

createServer({

  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          createdAt: new Date('2022-07-07'),
          // date: '01/09/2022',
          category:'Alimentação',
          title: 'Supermercado',
          type: 'withdraw',
          paymentMethod: 'A prazo',
          bank: 'Itaú',               
          amount: 600.00,
          historic: 'Compra de queijo e presunto',
          actions: 'Editar | Excluir'           
        },
        {
          id: 2,
          createdAt: new Date('2022-07-07'),         
          category:'Receitas',
          title: 'Venda de Computador',
          type: 'deposit',
          paymentMethod: 'À vista',
          bank: 'Banco do Brasil',
          amount: 2000.00,
          historic: 'Venda do Processador e cooler',
          actions: 'Editar | Excluir'          
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data =  JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  } 
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
