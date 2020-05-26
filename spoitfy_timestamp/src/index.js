

function start() {
    console.log('22');
    let token = window.location.hash.substr(1);
    if(token){
        const o = Object.fromEntries(new URLSearchParams(token));
        console.log(o.access_token);
        return o.access_token;
    } else {
        redirectToSpotifyAuthentication();
    }
}

function redirectToSpotifyAuthentication() {
    const authEndpoint = 'http://accounts.spotify.com/authorize';
    const clientId = '08c410b321d6487cb0217d6fceff8dc4'
    const redirectUri = `http://example.com/callback/`;
    let query = `client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&show_dialog=true&scope=user-read-private%20user-read-email`
    window.location = `${authEndpoint}?${query}`;
}

const token = start();

console.log(token);











// ${window.location.protocol}//${window.location.host}/

// HTTP requsts
// GET
// axios / fetch
// jquery 
