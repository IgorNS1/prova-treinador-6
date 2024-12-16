const startGameButton = document.querySelector('.start-game')
const title = document.querySelector('h1')
const questionContainer = document.querySelector('.question-container')
const questionText = document.querySelector('.question')
const answersContainer = document.querySelector('.answers-container')
const nextQuestionButton = document.querySelector('.next-question')

startGameButton.addEventListener('click', startGame)
nextQuestionButton.addEventListener('click', displayNextQuestion)

let currentQuestionIndex = 0 // contador das questões
let totalCorrect = 0

function startGame() {
    startGameButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    title.classList.add('hide')
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions_page_6.length === currentQuestionIndex) {
        return finishGame()
    }

    questionText.textContent = questions_page_6[currentQuestionIndex].question
    questions_page_6[currentQuestionIndex].answer.forEach(answer => {
        const newAnswer = document.createElement('button')

        newAnswer.classList.add('button', 'answer')
        newAnswer.textContent = answer.text

        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }

        answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute('class')
    nextQuestionButton.classList.add('hide')
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add('correct')
        document.body.classList.remove('incorrect')
        totalCorrect++
    } else {
        document.body.classList.add('incorrect')
        document.body.classList.remove('correct')
    }

    document.querySelectorAll('.answer').forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct')
        } else {
            button.classList.add('incorrect')
        }
        button.disabled = true
    })

    nextQuestionButton.classList.remove('hide')
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions_page_6.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ''

    switch (true) {
        case (performance >= 90):
            message = 'Execelente :D'
            break
        case (performance >= 70):
            message = 'Muito Bom :)'
            break
        case (performance >= 50):
            message = 'Bom :|'
            break
        case (performance >= 30):
            message = 'Precisa Melhorar :('
            break
        default:
            message = 'Precisa Melhorar MUITO D:'
    }

    questionContainer.innerHTML =
        `
            <p class="final-message">
                Você acertou ${totalCorrect} de ${totalQuestion} questôes!
                <span>Resultado: ${message}</span>
            </p>
        
            <button onclick="window.location.reload()" class="button">Refazer teste</button>

        `
}

const questions_page_6 = [
    {
        question: 'O que esperamos que o cliente sinta ao receber um pedido bem feito e bem embalado?',
        answer: [
            { text: 'Que ele note apenas o sabor da comida.', correct: false },
            { text: 'Que ele perceba o preço acessível.', correct: false },
            { text: 'Que ele sinta que houve uma atenção especial para embalar seu pedido e que o produto esteja com qualidade até a sua chegada.', correct: true },
            { text: 'Que ele não tenha nenhuma reação.', correct: false },
        ]
    },
    {
        question: 'O que está correto sobre a sugestão de vendas?',
        answer: [
            { text: 'A sugestão de venda deve ser oferecida com base em preferências anteriores ou opções populares.', correct: true },
            { text: 'A sugestão de venda deve ser feita sem relação com os hábitos do cliente.', correct: false },
            { text: 'A sugestão de venda deve ser ignorada.', correct: false },
            { text: 'Ofereça sempre o item mais caro sem considerar o cliente.', correct: false },
        ]
    },
    {
        question: 'O que faz parte da política e procedimento de pertences pessoais no ambiente de trabalho?',
        answer: [
            { text: 'Manter pertences pessoais em área comum.', correct: false },
            { text: 'Armazenar objetos de valor nos armários dos clientes.', correct: false },
            { text: 'Deixar os itens pessoais em qualquer lugar.', correct: false },
            { text: 'Não trazer itens de valor para o trabalho, pois o McDonald\'s não assume responsabilidade por desaparecimento ou danos a itens pessoais.', correct: true },
        ]
    },
    {
        question: 'O que faz parte das instruções de utilização das portas corta-fogo?',
        answer: [
            { text: 'Manter as portas corta-fogo trancadas para todos os acessos.', correct: false },
            { text: 'Manter as portas corta-fogo livres de obstruções. Nunca obstruir as portas corta-fogo.', correct: true },
            { text: 'Ignorar a manutenção dessas portas.', correct: false },
            { text: 'Deixar objetos próximos para facilitar acesso.', correct: false },
        ]
    },
    {
        question: 'O que fazer se o tempo de vida da UHC expirar?',
        answer: [
            { text: 'Mantenha os produtos mesmo expirados.', correct: false },
            { text: 'Descarte os alimentos na lixeira correta e espere por produtos frescos da fritadeira ou da chapa.', correct: true },
            { text: 'Misture os alimentos expirados com novos.', correct: false },
            { text: 'Congele os alimentos novamente.', correct: false },
        ]
    },
    {
        question: 'O que os clientes esperam ao entrar no McDonald\'s?',
        answer: [
            { text: 'Os clientes querem um ambiente lento e silencioso.', correct: false },
            { text: 'Os clientes esperam atendimento restrito às preferências do atendente.', correct: false },
            { text: 'Os clientes não têm expectativas específicas.', correct: false },
            { text: 'Os clientes querem uma ótima experiência de atendimento que seja rápida, agradável e personalizada. Eles querem uma comida saborosa que seja exatamente o que foi pedido por eles.', correct: true },
        ]
    },
    {
        question: 'O que os clientes esperam ao pedir nossas McFritas?',
        answer: [
            { text: 'Fritas moles e frias.', correct: false },
            { text: 'McFritas com sabor regular.', correct: false },
            { text: 'Douradas, crocantes, deliciosas. O aperitivo quente perfeito.', correct: true },
            { text: 'Porções pequenas sem padrão.', correct: false },
        ]
    },
    {
        question: 'O que queremos mostrar com a técnica de Influencer Vendedor "Vivenciamos as mesmas coisas"?',
        answer: [
            { text: 'Que temos semelhanças com nosso clientes.', correct: true },
            { text: 'Que somos superiores aos clientes.', correct: false },
            { text: 'Que não temos nenhuma relação com os clientes.', correct: false },
            { text: 'Que somos completamente diferentes dos clientes.', correct: false },
        ]
    },
    {
        question: 'O que são "Momentos de Verdade"?',
        answer: [
            { text: 'Apenas as interações finais com os clientes.', correct: false },
            { text: 'Momentos de descanso dos atendentes.', correct: false },
            { text: 'É o que o cliente vê e sente ao longo de cada etapa de sua jornada dentro do restaurante e que determina como foi sua experiência conosco.', correct: true },
            { text: 'Interações irrelevantes para a experiência do cliente.', correct: false },
        ]
    },
    {
        question: 'O que são câmaras de resfriados e congelados?',
        answer: [
            { text: 'Locais para guardar embalagens usadas.', correct: false },
            { text: 'São os locais onde todos os ingredientes refrigerados e congelados são armazenados quando são recebidos de uma entrega.', correct: true },
            { text: 'Locais para utensílios de cozinha.', correct: false },
            { text: 'Espaços de armazenamento sem refrigeração.', correct: false },
        ]
    },
    {
        question: 'O que Significa "Fazer Bem"?',
        answer: [
            { text: 'Fazemos rápido e negligenciamos detalhes.', correct: false },
            { text: 'Ignoramos os detalhes.', correct: false },
            { text: 'Executamos de maneira informal.', correct: false },
            { text: 'Fazemos o correto e nos concentramos em todos os detalhes.', correct: true },
        ]
    },
    {
        question: 'O que significa a Certificação RainForest para o nosso café?',
        answer: [
            { text: 'O café servido no local é cultivado e colhido sob práticas socioambientais responsáveis: cuidado com a terra e com as pessoas que nela trabalham.', correct: true },
            { text: 'O café é servido sob padrões simples de produção.', correct: false },
            { text: 'Não há certificação específica.', correct: false },
            { text: 'O foco está apenas no lucro do café.', correct: false },
        ]
    },
    {
        question: 'O que significa a estocagem 24/2?',
        answer: [
            { text: '24 horas refrigerados e 2 horas embalagens.', correct: false },
            { text: 'Estocagem feita diariamente.', correct: false },
            { text: '24 horas de embalagens e 2 horas refrigerados e congelados.', correct: true },
            { text: 'Estocagem para itens perecíveis.', correct: false },
        ]
    },
    {
        question: 'O que significa Dual Point?',
        answer: [
            { text: 'Um método para dobrar os pedidos.', correct: false },
            { text: 'Uma técnica de marketing.', correct: false },
            { text: 'Um sistema para pedidos online.', correct: false },
            { text: 'Dual Point é um sistema de Serviço no Balcão que pode ser utilizado com a Plataforma Operacional Made For You, separando fisicamente o ponto de solicitar o pedido e rec', correct: true },
        ]
    },
    {
        question: 'O que significa NÃO fazer direito, pensando dentro dos conceitos e atitudes que temos para agregar valor ao cliente?',
        answer: [
            { text: 'Apoiar e atender sempre às necessidades do cliente.', correct: false },
            { text: 'Tratar o cliente e os demais prestadores de serviço da forma mais distante e robótica possível.', correct: true },
            { text: 'Proporcionar momentos de interação positiva.', correct: false },
            { text: 'Garantir a entrega eficiente e amigável.', correct: false },
        ]
    },
];
