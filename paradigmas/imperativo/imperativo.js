// Paradigma Imperativo

// Exemplo 1: Usando 'if' para decidir o que fazer passo a passo.
// Aqui o programa verifica a idade e, dependendo do resultado, escolhe o que mostrar.
// Esse jeito de programar dá ordens diretas, como uma receita de bolo.
function verificaIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

// Exemplo 2: Usando 'for' para repetir algo várias vezes, controlando tudo manualmente.
// Criamos uma variável chamada 'soma' e mudamos seu valor dentro do laço.
// Isso mostra bem o estilo imperativo, por controlar o passo a passo da execução.
function somaArray(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}

// Exemplo 3: Mudando uma variável que está fora da função.
// A função altera o valor de 'contador', mostrando como o programa muda o estado das coisas.
// Isso também é característica do modo imperativo de programar: dizer o que fazer e mudar valores ao longo do tempo.
let contador = 0;
function incrementaContador() {
  contador = contador + 1;
  return contador;
}

/* Resumo dos conceitos usados:
- No paradigma imperativo, damos ordens ao computador, passo a passo.
- Mudamos valores com comandos (como if, for e atribuições).
- O foco está em "como" o programa deve fazer as coisas, controlando o fluxo e o estado manualmente.
*/
