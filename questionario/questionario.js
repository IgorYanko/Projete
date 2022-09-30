/* Aula 20 MaiaQuiz  */

let titulo = document.querySelector("h1");
let instrucoes = document.querySelector("#instrucoes");
let aviso = document.querySelector("#aviso");
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0; // pontos para o placar
let placar = 0; // placar

// PERGUNTA
let numQuestao = document.querySelector("#numQuestao");
let pergunta = document.querySelector("#pergunta");

// ALTERNATIVAS
let a = document.querySelector("#a");
let b = document.querySelector("#b");

// article com a class questoes
let articleQuestoes = document.querySelector(".questoes");
// ol li com as alternativas
let alternativas = document.querySelector("#alternativas");

const q0 = {
  numQuestao: 0,
  pergunta: "Pergunta",
  alternativa1: "Sim",
  alternativa2: "Não",
};

const q1 = {
  numQuestao: 1,
  pergunta: "Tosse",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  sintoma: function (sintoma) {
    +tosse;
  },
};

const q2 = {
  numQuestao: 2,
  pergunta: "Febre",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: "febre",
};

const q3 = {
  numQuestao: 3,
  pergunta: "Dor de cabeça",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: "cefaleia",
};

const q4 = {
  numQuestao: 4,
  pergunta: "Dor no corpo",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: "dornocorpo",
};

const q5 = {
  numQuestao: 5,
  pergunta: "Coriza",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: "coriza",
};

const q6 = {
  numQuestao: 6,
  pergunta: "Perda de apetite",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: "perdadeapetite",
};

const q7 = {
  numQuestao: 7,
  pergunta: "Perda de sentidos",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: "perdadesentido",
};

const q8 = {
  numQuestao: 8,
  pergunta: "Diarreia",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: "diarreia",
};

const q9 = {
  numQuestao: 9,
  pergunta: "Manchas",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: "manchas",
};

const q10 = {
  numQuestao: 10,
  pergunta: "Náuseas",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: "nauseas",
};

const q11 = {
  numQuestao: 11,
  pergunta: "Dor de garganta",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: "dordegarganta",
};

const q12 = {
  numQuestao: 12,
  pergunta: "Dor de barriga",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: "dordebarriga",
};

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12];

let numero = document.querySelector("#numero");
let total = document.querySelector("#total");

numero.textContent = q1.numQuestao;

let totalDeQuestoes = questoes.length - 1;
console.log("Total de questões " + totalDeQuestoes);
total.textContent = totalDeQuestoes;

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao;
pergunta.textContent = q1.pergunta;
a.textContent = q1.alternativa1;
b.textContent = q1.alternativa2;

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute("value", "true");
b.setAttribute("value", "false");

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
  numero.textContent = nQuestao;
  numQuestao.textContent = questoes[nQuestao].numQuestao;
  pergunta.textContent = questoes[nQuestao].pergunta;
  a.textContent = questoes[nQuestao].alternativa1;
  b.textContent = questoes[nQuestao].alternativa2;
  a.setAttribute("value", nQuestao + "A");
  b.setAttribute("value", nQuestao + "B");
}

function bloquearAlternativas() {
  a.classList.add("bloqueado");
  b.classList.add("bloqueado");
}

function desbloquearAlternativas() {
  a.classList.remove("bloqueado");
  b.classList.remove("bloqueado");
}

function verificarSeAcertou(nQuestao, resposta) {
  let numeroDaQuestao = nQuestao.value;
  console.log("Questão " + numeroDaQuestao);

  let respostaEscolhida = resposta.textContent;
  //console.log("RespU " + respostaEscolhida)

  let certa = questoes[numeroDaQuestao].correta;
  let valor = questoes[numeroDaQuestao].valor;

  if (respostaEscolhida == certa) {
    respostap += sintoma;
    console.log(respostap);
  }

  // bloquear a escolha de opcoes
  bloquearAlternativas();

  setTimeout(function () {
    //respostaEsta.textContent = '...'
    proxima = numeroDaQuestao + 1;

    if (proxima > totalDeQuestoes) {
      console.log("Fim do Jogo!");
      fimDoJogo();
    } else {
      proximaQuestao(proxima);
    }
  }, 250);
  desbloquearAlternativas();
}

function fimDoJogo() {
  instrucoes.textContent = "Fim de Jogo!";
  numQuestao.textContent = "";

  let pont = "";
  pontos == 0 ? (pont = "ponto") : (pont = "pontos");

  pergunta.textContent = "Você conseguiu " + pontos + " " + pont;

  aviso.textContent = "Você conseguiu " + pontos + " " + pont;

  a.textContent = "";
  b.textContent = "";
  c.textContent = "";

  a.setAttribute("value", "0");
  b.setAttribute("value", "0");
  c.setAttribute("value", "0");

  // OCULTAR O ARTICLE DA QUESTAO
  articleQuestoes.style.display = "none";

  setTimeout(function () {
    pontos = 0; // zerar placar
    location.reload();
  }, 2000);
}

var gripe = 32;
var covid = 28;
var colera = 36;
var variola = 18;
var virose = 51;
var dengue = 34;
var respostap = 0;

const tosse = 1;
const febre = 2;
const cefaleia = 3;
const dornocorpo = 4;
const coriza = 5;
const perdadeapetite = 6;
const perdadesentido = 7;
const diarreia = 8;
const manchas = 9;
const nauseas = 10;
const dordegarganta = 11;
const dordebarriga = 12;

if (q1 == true) {
  respostap + tosse;
}
if (q2 == true) {
  respostap + febre;
}
if (q3 == true) {
  respostap + cefaleia;
}
if (q4 == true) {
  respostap + dornocorpo;
}
if (q5 == true) {
  respostap + coriza;
}
if (q6 == true) {
  respostap + perdadeapetite;
}
if (q7 == true) {
  respostap + perdadesentido;
}
if (q8 == true) {
  respostap + diarreia;
}
if (q9 == true) {
  respostap + manchas;
}
if (q10 == true) {
  respostap + nauseas;
}
if (q11 == true) {
  respostap + dordegarganta;
}
if (q12 == true) {
  respostap + dordebarriga;
}
