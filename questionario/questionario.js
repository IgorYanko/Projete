
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Você está tossindo?",
    alternativaA : "Sim",
    alternativaB : "Não",
    correta      : "Norte",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Está com febre?",
    alternativaA : "Sim",
    alternativaB : "Não",
    correta      : "Sul",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Está sentindo dor de cabeça?",
    alternativaA : "Sim",
    alternativaB : "Não",
    correta      : "Leste",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "E dor no corpo?",
    alternativaA : "Sim",
    alternativaB : "Não",
    correta      : "Oeste",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Está com coriza?",
    alternativaA : "Sim",
    alternativaB : "Não",
    correta      : "América",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Houve perda de apetite?",
    alternativaA : "Sim",
    alternativaB : "Não",
    correta      : "América",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Houve perda de algum dos sentidos?",
    alternativaA : "Sim",
    alternativaB : "Não",
    correta      : "América",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Teve diarreia?",
    alternativaA : "Sim",
    alternativaB : "Não",
    correta      : "América",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Notou-se manchas no corpo?",
    alternativaA : "Sim",
    alternativaB : "Não",
    correta      : "América",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "O Brasil se localiza em qual continente?",
    alternativaA : "Sim",
    alternativaB : "Não",
    correta      : "América",
}

const q11 = {
    numQuestao   : 11,
    pergunta     : "O Brasil se localiza em qual continente?",
    alternativaA : "Sim",
    alternativaB : "Não",
    correta      : "América",
}

const q12 = {
    numQuestao   : 12,
    pergunta     : "O Brasil se localiza em qual continente?",
    alternativaA : "Sim",
    alternativaB : "Não",
    correta      : "América",
}

const q13 = {
    numQuestao   : 13,
    pergunta     : "O Brasil se localiza em qual continente?",
    alternativaA : "Sim",
    alternativaB : "Não",
    correta      : "América",
}


// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
// const doenças = [covid,gripe, H1n1, virose, cólera, varíola,]

const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}