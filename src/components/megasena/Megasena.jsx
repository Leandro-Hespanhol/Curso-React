//Gerar números aleatórios de 1 a 60 sem repetição.
//input com quantos número vai gerar (6, 7 ou 8 numeros)
//Fazer botão clicável pra gerar
import React from 'react';

export default () => {
  return parseInt(Math.random() * 59, 10) + 1;
};
