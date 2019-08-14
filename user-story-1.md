# Validate session ID before returning /secret/resource 

## Background

Only people who have logged in to our website should be able to access certain pages.

The goal of this story is to add authorization to one path in our webapp.

## Acceptance criteria

### Scenario 1 : Valid session cookie

1. When I request /secret/resource,
2. And my request includes a cookie with name `MERGERGMARKET` and value `guid=<session ID>`,
3. And the session ID is valid according to authentication-service,
4. Then I get a 200 response with the contents of the secret resource.

### Scenario 2 : No session cookie

1. When I request /secret/resource,
2. And my request does not includes a cookie with name `MERGERGMARKET`,
3. Then I get a 302 response redirecting me to the login page at https://login.acuris.com

### Scenario 3 : Invalid session cookie

1. When I request /secret/resource,
2. And my request includes a cookie with name `MERGERGMARKET` and value `guid=<session ID>`,
3. And the session ID is not valid according to authentication-service,
4. Then I get a 302 response redirecting me to the login page at https://login.acuris.com

## Assumptions

#### Login page

Assume that a login page already exists (in a separate project) and that on successful login it sets a cookie like so:

- Cookie Name: MERGERMARKET
- Example cookie value: guid=5108055d1cc44a2d9e7cbcf0fcee8dae

#### Authentication service

Assume that the authentication service already exists (in a separate project) with a 'keep-alive' endpoint like so: 

```
curl -XPOST  https://authentication-service.acuris.com/session/keep-alive/{sessionid}
```

If the session ID is valid a success response will be returned like so:

```bash
200 OK

{ 
  "userId": "200661555",
  "sessionToken": "sessionid",
  "expiryDate": "2019-12-31T23:59:59.999Z",
  "rememberMe": "false"
}
```

If the session ID is not valid the following response will be returned:

```bash
401 Unauthorized
```
