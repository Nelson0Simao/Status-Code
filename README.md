## Projecto Status-Code 
***
* Desenvolvidor: Nelson Simão
### Install plugin
Projecto esta indisponivel no npm temporariamente  :(
```
npm i status-code-v1
npm install status-code-v1
```

```js
const status = require("status-code-v1")

```
### Funcão
- statusCodes: object ira retorna number do status code
- statusPhrases: object que returna o na do status code em lowerCase
- getStatusCode(): função recebe status code e return nome do estado 
- getPhraseCode(): função que retorna nome do status code

### getPhraseCode(code) 
retornara o nome em string do http code
```js
getPhraseCode(500) // => 'Internal Server Error'
getPhraseCode(400) // => 'Bad Request'

statusCodeToPhrase[500] // => 'Internal Server Error'
statusCodeToPhrase[400] // => 'Bad Request'

```
### getStatusCode(msg)
retornara o nome do status code https 
```js
getStatusCode('NOT_FOUND') // => 404
getStatusCode('CONTINUE') // => 200
```

### statusCodes.obj
returna o numero do status code referente a string
```js
statusPhrases.BAD_GATEWAY // => 'Bad Gateway'
statusPhrases.CONTINUE    // => 'Continue'
```
retornara o status code http 
```js
statusCodes.BAD_GATEWAY // => '502'
statusCodes.CONTINUE    // => '100'
```

Exemplo de status code para usar no plugin

| NAME STATUS CODE | STATUS CODE |
|--- |--- |
| CONTINUE | 100 |
  | SWITCHING_PROTOCOLS | 101 |
  | OK | 200 |
  | CREATED | 201 |
  | ACCEPTED | 202 |
  | NON_AUTHORITATIVE_INFORMATION | 203 |
  | NO_CONTENT | 204 |
  | RESET_CONTENT | 205 |
  | PARTIAL_CONTENT | 206 |
  | MULTI_STATUS | 207 |
  | MULTIPLE_CHOICES | 300 |
  | MOVED_PERMANENTLY | 301 |
  | MOVED_TEMPORARILY | 302 |
  | SEE_OTHER | 303 |
  | NOT_MODIFIED | 304 |
  | USE_PROXY | 305 |
  | TEMPORARY_REDIRECT | 307 |
  | PERMANENT_REDIRECT | 308 |
  | BAD_REQUEST | 400 |
  | UNAUTHORIZED | 401 |
  | PAYMENT_REQUIRED | 402 |
  | FORBIDDEN | 403 |
  | NOT_FOUND | 404 |
  | METHOD_NOT_ALLOWED | 405 |
  | NOT_ACCEPTABLE | 406 |
  | PROXY_AUTHENTICATION_REQUIRED | 407 |
  | REQUEST_TIMEOUT | 408 |
  | CONFLICT | 409 |
  | GONE | 410 |
  | LENGTH_REQUIRED | 411 |
  | PRECONDITION_FAILED | 412 |
  | REQUEST_TOO_LONG | 413 |
  | REQUEST_URI_TOO_LONG | 414 |
  | UNSUPPORTED_MEDIA_TYPE | 415 |
  | REQUESTED_RANGE_NOT_SATISFIABLE | 416 |
  | EXPECTATION_FAILED | 417 |
  | IM_A_TEAPOT | 418 |
  | INSUFFICIENT_SPACE_ON_RESOURCE | 419 |
  | METHOD_FAILURE | 420 |
  | MISDIRECTED_REQUEST | 421 |
  | UNPROCESSABLE_ENTITY | 422 |
  | LOCKED | 423 |
  | FAILED_DEPENDENCY | 424 |
  | PRECONDITION_REQUIRED | 428 |
  | TOO_MANY_REQUESTS | 429 |
  | REQUEST_HEADER_FIELDS_TOO_LARGE | 431 |
  | UNAVAILABLE_FOR_LEGAL_REASONS | 451 |
  | INTERNAL_SERVER_ERROR | 500 |
  | NOT_IMPLEMENTED | 501 |
  | BAD_GATEWAY | 502 |
  | SERVICE_UNAVAILABLE | 503 |
  | GATEWAY_TIMEOUT | 504 |
  | HTTP_VERSION_NOT_SUPPORTED | 505 |
  | INSUFFICIENT_STORAGE | 507 |
  | NETWORK_AUTHENTICATION_REQUIRED | 511 |

