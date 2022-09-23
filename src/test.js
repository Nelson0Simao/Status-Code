const { statusCodes , getStatusCode, statusPhrases, PhraseToStatusCode , getPhraseCode} = require(".");

console.log( getStatusCode('NOT_FOUND'))

console.log( statusCodes.OK )

console.log( statusPhrases.TEMPORARY_REDIRECT)

console.log( PhraseToStatusCode.Accepted )

console.log( statusPhrases.BAD_GATEWAY )

console.log( getPhraseCode(500) )

