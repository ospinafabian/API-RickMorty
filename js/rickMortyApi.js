//define API with url to be fetch
const api = "https://rickandmortyapi.com/api/character";

//create getData function
const getData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("Error coming from API", error),
        alert("API is not available");
    });
};

const fillData = (jsonData) => {
    let htmlCards = "";
    console.log(jsonData);
    for (let i = 0; i < 20; i++) {
        htmlCards += '<div class="col">';
        htmlCards += '<div class="card">';
        htmlCards += `<img src="${jsonData.results[i].image}" class="card-img-top" alt="..." />`;
        htmlCards += '<div class="card-body">';
        htmlCards += `<h5 class="card-title"> Name: ${jsonData.results[i].name}</h5>`; // 3variable
        htmlCards += `<h5 class="card-text"> Status: ${jsonData.results[i].status}</h5>`;
        htmlCards += `<h5 class="card-text"> Species: ${jsonData.results[i].species}</h5>`;
        htmlCards += "</div>";
        htmlCards += "</div>";
        htmlCards += "</div>";
    }
    document.getElementById("cardsFromApi").innerHTML = htmlCards;
};

getData(api);
