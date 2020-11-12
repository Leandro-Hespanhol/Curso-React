import React from 'react';

export default (props) => {
  return (
    <div>
      <span>
        <strong>{props.nome} </strong>
      </span>
      <span>tem {props.idade} anos </span>
      <span>{props.nerd ? 'e é Nerd' : 'e não é Nerd'}!</span>
    </div>
  );
};
