const fetch = require('node-fetch');
const $ = require('jquery');
const axios = require('axios');

var clientId = '08c410b321d6487cb0217d6fceff8dc4';


const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123`

fetch(url).then(data=>console.log(data));

axios.get(url).then(data=>console.log(data.status));




// HTTP requsts
// GET
// axios / fetch
// jquery 
// 
