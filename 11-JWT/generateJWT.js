/*
 Generate JWT
 - node app to generate JWTs

 - make sure to have jose installed 
 - npm i jose

 - jose library - https://github.com/panva/jose
 
*/

const jose = require("jose");

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

let parsedkey = JSON.parse(jwk);

// on the jose.SignJWT, use helper methods to make sure we get the
// payload right setting the standard claims
jose.importJWK(parsedkey).then((key) =>
  new jose.SignJWT({})
    .setProtectedHeader({ typ: "JWT", alg: "ES256", kid: parsedkey.kid })
    .setIssuer("https://idp.jack.com")
    .setAudience("https://api.jack.com")
    .setSubject("5bee86259073c434bad2da2932222dabe")
    .setExpirationTime("6m")
    .setIssuedAt()
    .sign(key)
    .then((token) => console.log(token))
);

/* validate 
  - go to  https://jwt.io
  - check values
  - add public key in the page - never use real data!!!
  - make sure signature is valid
*/
