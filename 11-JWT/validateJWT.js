/*
 Validate JWT
 - node app to validate JWTs

 - make sure to have jose installed 
 - npm i jose
*/
console.log("--Validate JWT --");
console.log("Enter a JWT");

const jose = require("jose");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// public key
let jwk = `{
    "crv": "P-256",
    "alg": "ES256",
    "use": "sig",
    "kty": "EC",
    "kid": "a32fdd4b146677719ab2372861bded89",
    "d": "5nYhggWQzfPFMkXb7cX2Qv-Kwpyxot1KFwUJeHsLG_o",
    "x": "-uTmTQCbfm2jcQjwEa4cO7cunz5xmWZWIlzHZODEbwk",
    "y": "MwetqNLq70yDUnw-QxirIYqrL-Bpyfh4Z0vWVs_hWCM"
  }`;

let parsdkey = JSON.parse(jwk);

// now read from the terminal
readline.on("line", (token) => {
  readline.close();
  
  jose.importJWK(parsdkey).then((key) =>
      jose.jwtVerify(token, key, 
        {   issuer: "https://idp.jack.com", audience: "https://api.jack.com" })
        .then((result) => console.log(result)))
})
