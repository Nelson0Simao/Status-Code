'use strict'

var codes = require('./db/status-codes.json');

function criarMensagemStatusCode (codes) {
  var map = {};
  Object.keys(codes).forEach(function forEachCode (code) {
    var message = codes[code];
    var status = Number(code);

    // populate map
    map[message.toLowerCase()] = status;
  })

  return map;
}

function criarStatusCodeLista (codes) {
  return Object.keys(codes).map(function mapCode (code) {
    return Number(code);
  })
}

function getStatusCode (message) {
  var msg = message.toLowerCase();

  if (!Object.prototype.hasOwnProperty.call(status.code, msg)) {
    throw new Error('Invalido Mensagem do status: "' + message + '"');
  }

  return status.code[msg];
}

function getStatusMensagem (code) {
  if (!Object.prototype.hasOwnProperty.call(status.message, code)) {
    throw new Error('invalido status code: ' + code);
  }

  return status.message[code];
}

const status = (code) => {
  if (typeof code === 'number') {
    return getStatusMensagem(code);
  }

  if (typeof code !== 'string') {
    throw new TypeError('Status code deve ser Numero ou String');
  }
  // '403'
  var n = parseInt(code, 10);
  if (!isNaN(n)) {
    return getStatusMensagem(n);
  }

  return getStatusCode(code);
}

status.message = codes
status.code = criarMensagemStatusCode(codes);
status.codes = criarStatusCodeLista(codes);

module.exports = status;

