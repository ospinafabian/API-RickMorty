//function getData2 () {} // funcion normal es igual de valida que la flecha
//URL de la API de usuarios
const api = "https://jsonplaceholder.typicode.com/users";
const btnApiUsers = document.getElementById("apiUsers");

//obtener la informacion de la API
// cuando se crea una funcion recibe parametros

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
  //crear las 10 cards con los datos de los 10 usuarios que estan dentro de jsonData
  let htmlCards = "";
  //Ciclo repetitivo for
  console.log(jsonData);
  jsonData.forEach((e) => {
    htmlCards += '<div class="col">';
    htmlCards += '<div class="card">';
    htmlCards += '<div class="card-body">';
    htmlCards += `<h5 class="card-title"> ${e.name}</h5>`; //interpolation
    htmlCards += `<h5 class="card-text"> ${e.email}</h5>`;
    htmlCards += `<h5 class="card-text"> ${e.address.city}</h5>`;
    htmlCards += `<h5 class="card-text"> ${e.phone}</h5>`;
    htmlCards += "</div>";
    htmlCards += "</div>";
    htmlCards += "</div>";
  });
  document.getElementById("cardsFromApi").innerHTML = htmlCards;
};

// Evento click
btnApiUsers.onclick = function () {
  getData(api);
};
