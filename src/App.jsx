import './App.css';
import React from 'react';

import Card from './components/Layout/Card';

import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basics/Familia';
import FamiliaMembro from './components/basics/FamiliaMembro';
import Aleatorio from './components/basics/Aleatorio';
import Fragmentos from './components/basics/Fragmentos';
import ComParametro from './components/basics/ComParametro';
import Primeiro from './components/basics/Primeiro';

export default (_) => (
  <div className="App">
    <h1> Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#8 Renderização Condicional" color="#8C6954">
        <ParOuImpar numero={20}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>
        <UsuarioInfo usuario={{ email: 'fer@nando.com' }}></UsuarioInfo>
      </Card>

      <Card titulo="#7 Repetição Desafio" color="#FF432E ">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#6 Repetição" color="#1FDA9A">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="#5 Componente com Filhos" color="#E1D041">
        <Familia sobrenome="Zini">
          <FamiliaMembro nome="João" />

          <FamiliaMembro nome="Leandro" />
          <FamiliaMembro nome="Jiguê" />
        </Familia>
      </Card>
      <Card titulo="#4 Desafio Aleatório" color="#FA6900">
        <Aleatorio />
      </Card>

      <Card titulo="Fragmento#3" color="#E94C6F">
        <Fragmentos />
      </Card>

      <Card titulo="Com Parametro#2" color="#00C8F8">
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
