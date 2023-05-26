const api = "https://jsonplaceholder.typicode.com/photos";

const getData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("Error que llega desde la API", error),
        alert("La api no esta disponible");
    });
};

const fillData = (jsonData) => {
  //creates 10 cards with data of the 10 users inside jsonData
  let htmlCards = "";
  //For Loop
  for (let i = 0; i < 20; i++) {
    htmlCards += '<div class="col">';
    htmlCards += '<div class="card">';
    htmlCards += `<img src="${jsonData[i].url}" class="card-img-top" alt="..." />`;
    htmlCards += '<div class="card-body">';
    htmlCards += `<h5 class="card-title"> ${jsonData[i].title}</h5>`; //interpolation
    htmlCards += "</div>";
    htmlCards += "</div>";
    htmlCards += "</div>";
  }
  document.getElementById("cardsFromApi").innerHTML = htmlCards;
};


getData(api)