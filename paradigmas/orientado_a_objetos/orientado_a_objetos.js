// Paradigma Orientado a Objetos

// Exemplo 1: Criando uma "fábrica" de pessoas com nome e idade.
// A classe Pessoa serve para criar objetos que guardam informações e podem fazer coisas.
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;   // Cada pessoa tem um nome
    this.idade = idade; // e uma idade
  }
  
  // Exemplo 2: Método que permite a pessoa "se apresentar" falando seu nome e idade.
  // Métodos são ações que os objetos podem fazer.
  apresenta() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

// Exemplo 3: Criando uma nova classe Aluno que é um tipo especial de Pessoa.
// Usamos 'extends' para dizer que Aluno herda tudo de Pessoa e pode ter mais coisas.
class Aluno extends Pessoa {
  constructor(nome, idade, curso) {
    super(nome, idade);  // Chama a criação da Pessoa (nome e idade)
    this.curso = curso;  // E adiciona o curso específico do aluno
  }
  
  // Método que apresenta o aluno e diz qual curso ele faz.
  apresentaAluno() {
    return `${this.apresenta()} Estou matriculado no curso de ${this.curso}.`;
  }
}

// Criando objetos (pessoas e alunos) para usar as funcionalidades.
const pessoa = new Pessoa("Maria", 30);
const aluno = new Aluno("João", 20, "Informática");

/* Resumo dos conceitos usados:
- No paradigma OO, organizamos o programa usando "objetos" que guardam dados (estado)
  e têm ações (comportamentos) que podem executar.
- As "classes" são como moldes para criar esses objetos com suas características e habilidades.
- A herança (com 'extends') permite criar objetos mais específicos que aproveitam o que já existe,
  evitando repetir código e facilitando o reaproveitamento.
- Isso torna o programa mais organizado, fácil de entender e de manter, pois os objetos representam coisas do mundo real.
*/
