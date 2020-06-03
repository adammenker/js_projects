


alert("script linked");

function start() {
    let token = window.location.hash.substr(1);
    if(token){
        const o = Object.fromEntries(new URLSearchParams(token));
        console.log(o.access_token);
        return o.access_token;
    } else {
        console.log("got to this point");
        redirectToSpotifyAuthentication();
    }
}

function redirectToSpotifyAuthentication() {
    const authEndpoint = 'http://accounts.spotify.com/authorize';
    const clientId = '08c410b321d6487cb0217d6fceff8dc4'
    const redirectUri = `http://localhost:3000/`;
    let query = `client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true&scope=user-read-private%20user-read-email`
    window.location = `${authEndpoint}?${query}`;
}

const token = start();
console.log(`${window.location.hash}`);

console.log("got to this point");










// http://example.com/callback/
// ${window.location.protocol}//${window.location.host}/

// HTTP requsts
// GET
// axios / fetch
// jquery 
