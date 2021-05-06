
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

}