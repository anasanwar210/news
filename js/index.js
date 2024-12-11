const apiKey = `70454375a5b24931a14d3b919d8d1a6b`;

async function getNews() {
  let api = await fetch(
    `https://newsapi.org/v2/everything?q=tesla&from=2024-11-11&sortBy=publishedAt&apiKey=${apiKey}`
  );
  let response = await api.json();

  console.log(response);
}

getNews();

async function getNewsSyntax() {
  fetch(
    `https://newsapi.org/v2/everything?q=tesla&from=2024-11-11&sortBy=publishedAt&apiKey=${apiKey}`
  ).then(function(response){
    return response.json()
  }).then(function(response){
    console.log(response);
  })
}

getNewsSyntax();