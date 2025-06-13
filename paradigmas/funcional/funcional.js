// Paradigma Funcional

// Exemplo 1: Usando 'map' para criar um novo array com os quadrados dos números.
// Aqui usamos uma função que transforma os dados sem alterar os originais. Isso é chamado de imutabilidade.
const numeros = [1, 2, 3, 4, 5];
const quadrados = numeros.map(x => x * x);

// Exemplo 2: Função pura que sempre devolve o mesmo resultado com os mesmos valores.
// Ela não mexe em nada fora dela e nem altera variáveis externas.
function soma(a, b) {
  return a + b;
}

// Exemplo 3: Função de alta ordem, pois recebe outra função como argumento.
// Isso ajuda a reaproveitar o código com diferentes operações.
function aplicaOperacao(arr, operacao) {
  return arr.map(operacao);
}
const dobro = aplicaOperacao(numeros, x => x * 2);

/* Resumo dos conceitos usados:
- Usamos funções que não mudam os dados originais (imutabilidade).
- Criamos funções que só dependem dos valores que recebem (funções puras).
- Usamos funções que recebem outras funções (alta ordem), para reaproveitar melhor o código.
Essas ideias fazem parte do jeito funcional de programar.
*/
