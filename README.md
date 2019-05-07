# recruitment-pairing-test
Starting point for the recruitment pairing test

## Getting started

NVM is recommended: `nvm install && nvm use`

Then pull dependencies: `npm install`

## Scripts

`npm start` starts the site on http://localhost:9090

`npm test` runs a basic test

# Integrate Authentication into a Node and Express website
## Objective
We want visitors who have authenticated on the Debtwire website to be seamlessly authenticated when they visit a website running the provided code.

## Task
Please integrate Acuris' authentication system into the barebones codebase provided.

## Details

### Login Form
You are not required to create a login page/form as part of this exercise. Assume that the login page already exists (e.g. https://ci.debtwire.com/login )

When a user successfully logs in using the form, a cookie is set in the format below:



Cookie Name: MERGERMARKET
Example cookie value: guid=5108055d1cc44a2d9e7cbcf0fcee8dae

### Validate Token

In order to validate a user's token, a keep-alive endpoint exists which will return a “200” if the token is valid or “401” if invalid/unauthorised.  

The format of this endpoint is: https://ci-authentication.dev.mmgapi.net/session/keep-alive/<SESSION_TOKEN>

You can test a token in curl like this:

curl -X POST  https://ci-authentication.dev.mmgapi.net/session/keep-alive/5108055d1cc44a2d9e7cbcf0fcee8dae


Success Response:

(200 OK)

{ 
  "userId": "200661555",
  "sessionToken": "5108055d1cc44a2d9e7cbcf0fcee8dae",
  "expiryDate": "2016-02-27T12:09:55.415Z",
  "rememberMe": false
}

Failure Response:

(401 Unauthorised)

Unauthorized
Notes
The `sessionToken` returned in the JSON response from the keep-alive endpoint may be different to the one submitted in the URL.  The reason for this is that tokens expire after a period of time and the user's session is renewed with a new session token.


