const assert = require('assert')
const http = require('http')
const status = require('../index')
const statusCode = require('./mocks')

describe('status', function () {
  describe('argumentos', function () {
    describe('code', function () {

      it('Deve aceitar numero', function () {
        assert.strictEqual(status(200), 'OK')
      })

      it('Deve aceitar string', function () {
        assert.strictEqual(status('OK'), 200)
      })

      it('Deve aceitar string number', function () {
        assert.strictEqual(status('200'), 'OK')
      })

    })
  })

  describe('quando dado um número', function () {
    it('Deve retorna mensagem quando o status code foi valido', function () {
      assert.strictEqual(status(200), 'OK')
      assert.strictEqual(status(404), 'Not Found')
      assert.strictEqual(status(500), 'Internal Server Error')
    })

    it('Deve jogar para invalido status code', function () {
      assert.throws(status.bind(null, 0), /invalido status code/)
      assert.throws(status.bind(null, 1000), /invalido status code/)
    })

    it('Deve jogar para desconhecido status code', function () {
      assert.throws(status.bind(null, 299), /invalido status code/)
      assert.throws(status.bind(null, 310), /invalido status code/)
    })

    it('Deve jogar para disconectado status code', function () {
      assert.throws(status.bind(null, 306), /invalido status code/)
    })
  })

  describe('Quando recebe uma string', function () {
    it('Deve retornar mensagem quando um código de status válido', function () {
      assert.strictEqual(status('200'), 'OK')
      assert.strictEqual(status('404'), 'Not Found')
      assert.strictEqual(status('500'), 'Internal Server Error')
    })

    it('Deve ser verdadeiro quando uma mensagem de status válida', function () {
      assert.ok(status('OK'))
      assert.ok(status('Not Found'))
      assert.ok(status('Internal Server Error'))
    })

    it('Deve ser insensível a maiúsculas e minúsculas', function () {
      assert.ok(status('Ok'))
      assert.ok(status('not found'))
      assert.ok(status('INTERNAL SERVER ERROR'))
    })

    it('Deve jogar para mensagem de status desconhecida', function () {
      assert.throws(status.bind(null, 'too many bugs'), /Invalido Mensagem do status/)
      assert.throws(status.bind(null, 'constructor'), /Invalido Mensagem do status/)
      assert.throws(status.bind(null, '__proto__'), /Invalido Mensagem do status/)
    })

    it('Deve jogar para código de status desconhecido', function () {
      assert.throws(status.bind(null, '299'), /invalido status code/)
    })
  })


  describe('.empty', function () {
    it('Deve ser um objeto', function () {
      assert.ok(statusCode.empty)
      assert.strictEqual(typeof statusCode.empty, 'object')
    })

    it('Deve incluir 204', function () {
      assert(statusCode.empty[204])
    })
  })

  describe('.mensagem', function () {
    it('Deve ser um mapa de código para mensagem', function () {
      assert.strictEqual(status.message[200], 'OK')
    })

    it('Deve incluir códigos do Node.js', function () {
      Object.keys(http.STATUS_CODES).forEach(function forEachCode (code) {
        assert.ok(status.message[code], 'contains ' + code)
      })
    })
  })

  describe('.redirecionar', function () {
    it('Deve ser um objecto', function () {
      assert.ok(statusCode.redirect)
      assert.strictEqual(typeof statusCode.redirect, 'object')
    })

    it('Deve incluir 308', function () {
      assert(statusCode.redirect[308])
    })
  })

  describe('.tente novamente', function () {
    it('Deve ser um objecto', function () {
      assert.ok(statusCode.retry)
      assert.strictEqual(typeof statusCode.retry, 'object')
    })

    it('Deve incluir 504', function () {
      assert(statusCode.retry[504])
    })
  })
})
