const TIPOS = {
  IMPERATIVO: "imperativo",
  FUNCIONAL: "funcional",
  OO: "oo"
};

const paradigmas = {
  imperativo: 'paradigmas/imperativo/imperativo.js',
  funcional: 'paradigmas/funcional/funcional.js',
  oo: 'paradigmas/orientado_a_objetos/orientado_a_objetos.js'
};

const infoParadigmas = {
  imperativo: {
    titulo: "Paradigma Imperativo",
    descricao: "O paradigma imperativo foca em como o programa deve executar suas tarefas, utilizando comandos sequenciais, estruturas de controle e manipulação de variáveis.",
    principios: [
      "Sequência de comandos",
      "Estruturas de controle (if, for, while)",
      "Manipulação explícita de estado"
    ]
  },
  funcional: {
    titulo: "Paradigma Funcional",
    descricao: "O paradigma funcional enfatiza o uso de funções puras, imutabilidade e evita efeitos colaterais, promovendo um código mais previsível e modular.",
    principios: [
      "Funções puras",
      "Imutabilidade",
      "Composição de funções",
      "Ausência de efeitos colaterais"
    ]
  },
  oo: {
    titulo: "Paradigma Orientado a Objetos",
    descricao: "O paradigma orientado a objetos organiza o código em objetos que encapsulam estado e comportamento, promovendo reutilização e modularidade.",
    principios: [
      "Encapsulamento",
      "Herança",
      "Polimorfismo",
      "Abstração"
    ]
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const codeDisplay = document.getElementById('code-display');
  const infoSection = document.getElementById('paradigma-info');
  const btnImperativo = document.getElementById('btn-imperativo');
  const btnFuncional = document.getElementById('btn-funcional');
  const btnOO = document.getElementById('btn-oo');

  function atualizarCodigo(paradigma) {
    const caminho = paradigmas[paradigma];
    fetch(caminho)
      .then(response => {
        if (!response.ok) throw new Error('Arquivo não encontrado');
        return response.text();
      })
      .then(codigo => {
        codeDisplay.textContent = codigo;
        if (window.Prism) Prism.highlightElement(codeDisplay);
      })
      .catch(() => {
        codeDisplay.textContent = '// Erro ao carregar o exemplo.';
      });
  }

  function atualizarInfoParadigma(paradigma) {
    const info = infoParadigmas[paradigma];
    if (!info) {
      infoSection.innerHTML = "";
      return;
    }
    infoSection.innerHTML = `
      <h2>${info.titulo}</h2>
      <p>${info.descricao}</p>
      <strong>Princípios:</strong>
      <ul>
        ${info.principios.map(p => `<li>${p}</li>`).join('')}
      </ul>
    `;
  }

  function setActiveButton(id) {
    [btnImperativo, btnFuncional, btnOO].forEach(btn => btn.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }

  btnImperativo.addEventListener('click', () => {
    atualizarCodigo('imperativo');
    atualizarInfoParadigma('imperativo');
    setActiveButton('btn-imperativo');
  });

  btnFuncional.addEventListener('click', () => {
    atualizarCodigo('funcional');
    atualizarInfoParadigma('funcional');
    setActiveButton('btn-funcional');
  });

  btnOO.addEventListener('click', () => {
    atualizarCodigo('oo');
    atualizarInfoParadigma('oo');
    setActiveButton('btn-oo');
  });

  // Inicializa com imperativo
  atualizarCodigo('imperativo');
  atualizarInfoParadigma('imperativo');
  setActiveButton('btn-imperativo');
});
