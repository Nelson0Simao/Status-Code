const assert = require('assert')
const { statusCodes, getStatusCode, statusPhrases, getPhraseCode} = require('../src')

describe('status', function () {
  describe('argumentos', function () {
    describe('code', function () {

      it('Deve aceitar string', function () {
        assert.strictEqual(statusCodes.OK, 200)
      })
      it('Deve aceitar numero', function () {
        assert.strictEqual(statusPhrases.OK, 'OK')
      })
      it('Deve aceitar string number', function () {
        assert.strictEqual(statusPhrases.OK, 'OK')
      })

    })
  })})

  describe('quando dado um número', function () {
    it('Deve retorna mensagem quando o status code foi valido', function () {
      assert.strictEqual(getPhraseCode(200), 'OK')
      assert.strictEqual(getPhraseCode(404), 'Not Found')
      assert.strictEqual(getPhraseCode(500), 'Internal Server Error')
    })
  })

  describe('Quando recebe uma string', function () {
    it('Deve retornar mensagem quando um código de status válido', function () {
      assert.strictEqual(getPhraseCode('200'), 'OK')
      assert.strictEqual(getPhraseCode('404'), 'Not Found')
      assert.strictEqual(getPhraseCode('500'), 'Internal Server Error')
    })

    it('Deve ser verdadeiro quando uma mensagem de status válida', function () {
      assert.ok(statusPhrases.OK)
      assert.ok(statusPhrases.NOT_FOUND)
      assert.ok(statusPhrases.INTERNAL_SERVER_ERROR)
    })

    it('Deve ser insensível a maiúsculas e minúsculas', function () {
      assert.strictEqual(getPhraseCode(200), 'OK')
      assert.strictEqual(getPhraseCode(404), 'Not Found')
      assert.strictEqual(getPhraseCode(500), 'Internal Server Error')
    })
  })
