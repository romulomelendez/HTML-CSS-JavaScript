
    const NewsAPI = require('newsapi')
    const newsapi = new NewsAPI('f3202755b11646868149a350609b4965')

    newsapi.v2.topHeadlines({

        sources: 'bbc-news,the-verge',
        q: 'bitcoin',
        category: 'business',
        language: 'en',
        country: 'us'

    }).then(response => {

        console.log(response)
  
    });