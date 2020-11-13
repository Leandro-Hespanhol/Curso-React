import React from 'react';

export default (props) => {
  const min = 20;
  const max = 30;
  const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
  const gerarNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>Filho</div>
      <button
        onClick={function (e) {
          props.quandoClicar('Pedro', gerarIdade(), gerarNerd);
        }}
      >
        Fornecer Informações
      </button>
    </div>
  );
};
