## Projecto Status-Code 


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
