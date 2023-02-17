let strHeading = document.getElementById("starter-heading");
let quote = document.getElementById("qoute");
let person = document.getElementById("person");
let btn = document.getElementById("generator-button");

function getData() {
  fetch("https://api.quotable.io/random")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((jsonqoutes) => {
      quote.innerHTML = jsonqoutes.content;
      person.innerHTML = jsonqoutes.author;

      strHeading.style.display = "none";
    })
    .catch((error) => {
      console.log("error!");
      console.error(error);
    });
}

btn.addEventListener("click", getData);
