## Projecto Status-Code 

### Install plugin
Projecto esta indisponivel no npm temporariamente  :(
```
npm i status-code-v1
npm install status-code-v1
```

```js
const status = require("status-code")

```
- statusCodes: object ira retorna nome do status code
- getStatusCode(): função recebe status code e return nome do estado 

### status(code) 
retornara o nome em string do http code
```js
getPhraseCode(500) // => 'Internal Server Error'
getPhraseCode(400) // => 'Bad Request'
```
```js
statusPhrases.BAD_GATEWAY // => 'Bad Gateway'
statusPhrases.CONTINUE    // => 'Continue'
```

### status(msg)
returna o numero do status code referente a string

```js
getStatusCode('NOT_FOUND') // => 404
getStatusCode('CONTINUE') // => 200
```
Exemplo de status code para usar no plugin
```json
{
  "100": "Continue",
  "101": "Switching Protocols",
  "200": "OK",
  "201": "Created",
  "202": "Accepted",
  "203": "Non-Authoritative Information",
  "208": "Already Reported",
  "300": "Multiple Choices",
  "301": "Moved Permanently",
  "400": "Bad Request",
  "401": "Unauthorized",
  "402": "Payment Required",
  "403": "Forbidden",
  "404": "Not Found",
  "405": "Method Not Allowed",
  "406": "Not Acceptable",
  "407": "Proxy Authentication Required",
  "408": "Request Timeout",
  "409": "Conflict",
  "501": "Not Implemented",
  "502": "Bad Gateway",
  "503": "Service Unavailable",
  "504": "Gateway Timeout"
}
```