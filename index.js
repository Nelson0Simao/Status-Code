const statusCodes = require("./src/status-codes");
const { getPhraseCode, getStatusCode } = require("./src/function");
const { statusCodeToPhrase, PhraseToStatusCode } = require("./src/utils");
const { statusPhrases } = require("./src/statusPhrases");

module.exports = {
    statusCodes,
    getPhraseCode,
    getStatusCode,
    statusCodeToPhrase,
    PhraseToStatusCode,
    statusPhrases
}

