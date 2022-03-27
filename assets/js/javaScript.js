const novoPedido = (evento) => {
    evento.preventDefault()
   //captura da TAG <ul>, onde vamos colocar a LI dentro, com o <p> em appendChild
    const lista = document.querySelector('[data-list]')
    
    //captura da janela de input 
    const input = document.querySelector('[data-form-input]')
   //tratamento do dado, somente o valor do input
    const valor = input.value
   //criação da <li> dentro da <ul>
    const tarefa = document.createElement('li')
    //coloca uma class nessa <li>
    tarefa.classList.add('li-js')
    //criação de <div> 
    const divDinamica = document.createElement('div')
    divDinamica.classList.add('div-js')
    //variavel que recebe o valor do input, com a tag <p> 
    const conteudo = `<p class="conteudo">${valor}</p>`
    //a variavel tarefa recebe em formato html o valor de conteudo
    divDinamica.innerHTML = conteudo
    //aqui colocamos a variavel "tarefa" como filha de "lista"
   

    lista.appendChild(tarefa)
    tarefa.appendChild(divDinamica)
   
   
    divDinamica.appendChild(BotaoConclui())
    divDinamica.appendChild(BotaoAdicionar())
    divDinamica.appendChild(BotaoDeleta())
 
    //depois do click, a caixa de input recebe o valor zerado
    input.value = ""
}

const botaoAnotar = document.querySelector('[data-form-button]')
botaoAnotar.addEventListener('click', novoPedido)

const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')
    botaoConclui.innerText = 'Concluir'
    botaoConclui.classList.add('botaoConclui')
    botaoConclui.addEventListener('click', concluirTarefa)
    return botaoConclui
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target
    const divTarefa = botaoConclui.parentElement
    const liTarefa = divTarefa.parentElement
    const pedidoNovo = liTarefa.querySelectorAll('.pedidoNovo')
    liTarefa.classList.toggle('done')
    divTarefa.classList.toggle('done')
    pedidoNovo.classList.toggle('done')

}   

const BotaoAdicionar = () => {
    const botaoAdicionar = document.createElement('button')
    botaoAdicionar.innerText = 'Adicionar'
    botaoAdicionar.classList.add('botaoAdicionar')
    botaoAdicionar.addEventListener('click', adicionarInformacao)
    return botaoAdicionar
}

const adicionarInformacao = (evento) => {
     const informacaoAdicional = window.prompt('Coloque a informação para adicionar')
     const botaoAdicionar = evento.target
     const elementoPai = botaoAdicionar.parentElement
     const elemento2Pai = elementoPai.parentElement
     const tarefa = document.createElement('p')
     tarefa.classList.add('pedidoNovo')
     const conteudo = `${informacaoAdicional}`
     tarefa.innerHTML = conteudo

     elemento2Pai.appendChild(tarefa)

}

const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'Deletar'
    botaoDeleta.classList.add('botaoDeletar')
    botaoDeleta.addEventListener('click', deletarTarefa)
    return botaoDeleta
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target
    const tarefaCompleta = botaoDeleta.parentElement
    const eventoCompleta = tarefaCompleta.parentElement
    eventoCompleta.remove()
}

