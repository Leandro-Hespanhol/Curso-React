import './TabelaProdutos.css';
import React from 'react';
import produtos from '../../data/produtos';

export default (props) => {
  function getLinhas() {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
          <td>{produto.id}</td>
          <td>{produto.Nome}</td>
          <td>R$ {produto.Preço.toFixed(2).replace('.', ',')}</td>
        </tr>
      );
    });
  }
  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>id </th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{getLinhas()}</tbody>
      </table>
    </div>
  );
};

/*
  return (
    <div>
      <ul style={{ table: 'none' }}>{TbProdutos}</ul>
    </div>
  );
};*/

/*const App = () => {
  return (
    <Table 

    >
      {columnDefinition.map(({dataKey, ...restProps}) => (
        <Column key={dataKey} dataKey={dataKey} {...restProps} />
      ))}
    </Table>
  );
}*/
