'use strict'

const askFact = async () => {

    const url = `https://api.chucknorris.io/jokes/random`
    const data = await fetch(url)
    const fact = await data.json()
    console.log(fact)
    showFact(fact)

}

const showFact = (fact) => {
    
    window.document.querySelector('h2#cnFact').innerText = fact.value
    window.document.querySelector('img#icon').src = fact.icon_url

}

const changeButtonContent = () => window.document.querySelector('button#btn').innerText = 'Another fact ? Just press!'

const hideTittle = () => window.document.querySelector('h1#tittle').style.display = 'none'

