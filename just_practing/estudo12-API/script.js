'use strict'

const pesquisarCEP = async() => {   

    const cep = window.document.querySelector('input#cep').value
    const url = `http://viacep.com.br/ws/${cep}/json/`
    const dados = await fetch(url)
    const ende = await dados.json()
    console.log(ende)
    preencherForm(ende)

}

const preencherForm = (ende) => {

    window.document.querySelector('input#endereco').value = ende.logradouro
    window.document.querySelector('input#bairro').value = ende.bairro
    window.document.querySelector('input#cidade').value = ende.localidade
    window.document.querySelector('input#estado').value = ende.uf
    window.document.querySelector('input#ddd').value = ende.ddd

}

window.document.querySelector('input#cep').addEventListener('focusout', pesquisarCEP)