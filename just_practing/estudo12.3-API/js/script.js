
const catchNews = async () => {

    const url = `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=f3202755b11646868149a350609b4965`
    var req = new Request(url);
    const data = await fetch(req)
    const news = await data.json()
    console.log(data)
    console.log(news)

}

catchNews()