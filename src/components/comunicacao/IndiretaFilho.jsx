import React from 'react';

export default (props) => {
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={function (e) {
          props.quandoClicar('Pedro', 53, true);
        }}
      >
        Fornecer Informações
      </button>
    </div>
  );
};
