
const pickTheNews = async () => {

    const url = `http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia`
    const data = await fetch(url)
    const news = await data.json()
    console.log(news)
    showNews(news) 

}

pickTheNews()

const showNews = (news) => {
    
    console.log(news.items[0])
    window.document.querySelector('h2#title').innerText = news.items[0].titulo
    let img = window.document.querySelector('img#image').src = news.items[0].imagens
    console.log(img)
}

//  images\/agenciadenoticias\/estatisticas_sociais\/2021_05\/PNS_Violencia_HOME_Jos-Fernando-Ogura-AEN.jpg