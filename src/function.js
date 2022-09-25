const { statusCodeToPhrase, PhraseToStatusCode } = require("./utils");

function getPhraseCode(statusCode) {
    const result = statusCodeToPhrase[statusCode.toString()];
    if (!result) {
      throw new Error(`Status code does not exist: ${statusCode}`);
    }
    return result;
}

function getStatusCode(Phrase){
    const result = PhraseToStatusCode[Phrase];
    if (!result) {
      throw new Error(`Reason phrase does not exist: ${Phrase}`);
    }
    return result;
  }

module.exports = {
    getPhraseCode,
    getStatusCode
}