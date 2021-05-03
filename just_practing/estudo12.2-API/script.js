'use strict'

const askFact = async (category) => {

    //const url = `https://api.chucknorris.io/jokes/random`             URL without categories
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`
    const data = await fetch(url)
    const fact = await data.json()
    console.log(category)
    console.log(fact)
    showFact(fact)

}

const showFact = (fact) => {
    
    window.document.querySelector('h2#cnFact').innerText = fact.value
    window.document.querySelector('img#icon').src = fact.icon_url

}

//const changeButtonContent = () => window.document.querySelector('button#btn').innerText = 'Another fact ? Just press!'        Function to change the button context, but I'm not using this button right now!

const hide = () => {
    
    window.document.querySelector('h1#tittle').style.display = 'none'
    window.document.querySelector('h2#chooses').style.display = 'none'
    window.document.querySelector('section.categories').style.display = 'none'

}