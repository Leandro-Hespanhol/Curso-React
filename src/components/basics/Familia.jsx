import React from 'react';
import FamiliaMembro from './FamiliaMembro';

export default (props) => {
  return (
    //3 formas de pegar o sobrenome
    //...props é a propriedade SPREAD
    <div>
      <FamiliaMembro nome="João" sobrenome={props.sobrenome} />
      <FamiliaMembro nome="Leandro" {...props} />
      <FamiliaMembro nome="Jiguê" sobrenome="Zini" />
    </div>
  );
};
