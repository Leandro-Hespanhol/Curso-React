import React, { cloneElement } from 'react';

export default (props) => {
  return (
    //3 formas de pegar o sobrenome
    //...props é a propriedade SPREAD
    <div>
      {props.children.map((child, i) => {
        return cloneElement(child, { ...props, key: i });
      })}
    </div>
  );
};
