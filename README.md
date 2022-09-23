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
- status(): funcão ira retorna nome do status code

### status(code) 
retornara o nome em string do http code
```js
status(403) // => 'Forbidden'
status('403') // => 'Forbidden'
status(306) // throws
```
### status(msg)
returna o numero do status code referente a string

```js
status('forbidden') // => 403
status('Forbidden') // => 403
status('foo') // throws
```

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