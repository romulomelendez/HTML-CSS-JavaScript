'use strict'

const askAdvice = async () => {

    const url = `https://api.adviceslip.com/advice`
    const data = await fetch(url)
    const advice = await data.json()
    console.log(advice)
    showAdvice(advice)

}

const showAdvice = (advice) => window.document.querySelector('h2#myAdvice').innerText = advice.slip.advice

const changeButtonContent = () => window.document.querySelector('button#btn').innerText = 'Another Advice?'

const hideTittle = () => window.document.querySelector('h1#tittle').style.display = 'none'

