const statusCodes = require("./status-codes");
const { getPhraseCode, getStatusCode } = require("./function");
const { statusCodeToPhrase, PhraseToStatusCode } = require("./utils");
const { statusPhrases } = require("./statusPhrases");

module.exports = {
    statusCodes,
    getPhraseCode,
    getStatusCode,
    statusCodeToPhrase,
    PhraseToStatusCode,
    statusPhrases
}