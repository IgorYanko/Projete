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
  valor: 1,
  // sintoma: function (sintoma) {
  //   +tosse;
  // },
};

const q2 = {
  numQuestao: 2,
  pergunta: "Febre",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: 2,
};

const q3 = {
  numQuestao: 3,
  pergunta: "Dor de cabeça",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: 3,
};

const q4 = {
  numQuestao: 4,
  pergunta: "Dor no corpo",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: 4,
};

const q5 = {
  numQuestao: 5,
  pergunta: "Coriza",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: 5,
};

const q6 = {
  numQuestao: 6,
  pergunta: "Perda de apetite",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: 6,
};

const q7 = {
  numQuestao: 7,
  pergunta: "Perda de sentidos",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: 7,
};

const q8 = {
  numQuestao: 8,
  pergunta: "Diarreia",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: 8,
};

const q9 = {
  numQuestao: 9,
  pergunta: "Manchas",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: 9,
};

const q10 = {
  numQuestao: 10,
  pergunta: "Náuseas",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: 10,
};

const q11 = {
  numQuestao: 11,
  pergunta: "Dor de garganta",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: 11,
};

const q12 = {
  numQuestao: 12,
  pergunta: "Dor de barriga",
  alternativa1: "Sim",
  alternativa2: "Não",
  correta: "Sim",
  valor: 12,
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
    respostap += valor;
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
  instrucoes.textContent = "";
   numQuestao.textContent = "";

 let pont = "";
   pontos == 0 ? (pont = "ponto") : (pont = "pontos");

  // pergunta.textContent = "Você conseguiu " + pontos + " " + pont;

  // aviso.textContent = "Você conseguiu " + pontos + " " + pont;

   a.textContent = "";
   b.textContent = "";

  a.setAttribute("value", "0");
  b.setAttribute("value", "0");

  setTimeout(function() {
    pontos = 0 // zerar placar
    location.reload();
  }, 2000)

//   // OCULTAR O ARTICLE DA QUESTAO
   articleQuestoes.style.display = "none";

   if (respostap == 32) {
    alert("Você possivelmente está com gripe")
  }
  if (respostap == 28 ) {
    alert("Você possivelmente está com  covid")
  }
  if (respostap == 36) {
    alert("Você possivelmente está com cólera")
  }
  if (respostap == 18) {
    alert("Você possivelmente está com varíola")
  }
  if (respostap == 51) {
    alert("Você possivelmente está com virose")
  }
  if (respostap == 34) {
    alert("Você possivelmente está com dengue")
  }



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

