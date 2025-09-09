'use strict'

const barra = document.getElementById('barra')
const campo = document.createElement('input')
const botaoBuscar = document.createElement('button')

const container = document.getElementById('container')

async function buscarImagens (raça) {
    const url = `https://dog.ceo/api/breed/${raça}/images`

    const response = await fetch(url)
    const imagens = await response.json()

    return imagens.message
}

function carregarImagens(urlDaImagem){
    container.textContent = ''

    urlDaImagem.forEach(url => {
        const quadro = document.createElement('div')
        const imagem = document.createElement('img')

        imagem.src =url
        
        quadro.classList.add('quadro')
        quadro.appendChild(imagem)

        container.appendChild(quadro)
    })
}

function buscar (){
    barra.appendChild(campo)
    campo.placeholder = 'Qual raça deseja buscar...'

    barra.appendChild(botaoBuscar)
    botaoBuscar.textContent = 'buscar'

    botaoBuscar.addEventListener('click', async() => {
        let pesquisa = campo.value

        let link = await buscarImagens(pesquisa)

        carregarImagens(link)
    })
}

buscar()