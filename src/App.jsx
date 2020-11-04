import './App.css';
import React from 'react';

import Card from './components/Layout/Card';

import Familia from './components/basics/Familia';
import Aleatorio from './components/basics/Aleatorio';
import Fragmentos from './components/basics/Fragmentos';
import ComParametro from './components/basics/ComParametro';
import Primeiro from './components/basics/Primeiro';

export default (_) => (
  <div className="App">
    <h1> Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#5 Componente com Filhos" color="#E1D041">
        <Familia sobrenome="Zini" />
      </Card>
      <Card titulo="#4 Desafio Aleatório" color="#FA6900">
        <Aleatorio />
      </Card>

      <Card titulo="Fragmento#3" color="#E94C6F">
        <Fragmentos />
      </Card>
      <Card titulo="Com Parametro#2" color="#00C8F8   ">
        <ComParametro
          titulo="Situação do aluno"
          aluno="Magno"
          nota={10}
        ></ComParametro>
      </Card>
      <Card titulo="Título#1" color="#354458">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
