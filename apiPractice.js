const fetch = require("node-fetch");
const apiBaseUrl = "https://pokeapi.co/api/v2/";

/*
//We are going to pass fetch a url
//Fetch will return a Promise
//We will interact with object returned in the Promise

fetch(apiBaseUrl + "pokemon/ditto")
  .then(response => {
    // console.log(response);
    return response.json();
  })
  .then(json => {
      console.log(json.id);
  })
  .catch(error => {
      console.log(error);
  });
*/


async function getDittoId(){
    try{
        const response = await fetch(`${apiBaseUrl}pokemon/pikachu`);
        const json = await response.json();
        console.log(json.id);
    }
    catch(exception){
        console.log("* error ocurred:\n\n" + exception);
    }
}

getDittoId();