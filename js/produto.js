function buscaElemento(seletor) {
    return document.querySelector(seletor)
}

var inputTamanho = buscaElemento('[name=tamanho]')
var outputTamanho = buscaElemento('[name=valortamanho]')

function mostraTamanho() {
    outputTamanho.value = inputTamanho.value
}

inputTamanho.oninput = mostraTamanho