// for news

function getData() {
    const url= "JSON/news.json";
    fetch (url).then((response)=> {
        return response.json() 
    }).then((json) => {
         
        console.log(json);


        let articles=json.articles
        let newsHtml = " ";
        for (keys of articles) {
            //console.log(keys)

             newsHtml += ` <div class="mainHero" id= "newsContent">
             <button class="expand-btn">${keys.title}</button>
     <div class="maincontent id=newsContent">
         <p>${keys.description} <a href=${keys.url} target= "_blank"><b>Read more here: </b>  </a></p>
     </div>`;
            
        };
        newsContent.innerHTML = newsHtml;
    })
}

getData() ;


// 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d3b0cf87a6c44e9dbb6361d75f2b5083'