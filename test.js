'use strict'

const assert = require('assert')
const isArrayWith = require('is-array-with')
const keys = require('.')

describe('propKeys()', function () {
  it('should return an array', function () {
    assert(Array.isArray(keys({})))
  })

  it('should return an object’s own property keys', function () {
    assert(keys({key: 'value'}).some(k => k === 'key'))
  })

  it('should return an object’s inherited property keys', function () {
    assert(keys({key: 'value'}).some(k => k === 'toString'))
  })

  it('should exclude inherited properties if `own` is true', function () {
    assert(isArrayWith(keys({key: 'value'}, {own: true}), 'key'))
  })

  it('should include only enumerable properties if `enumOnly` is true', function () {
    const obj = {own: 'value'}
    Object.defineProperty(obj, 'key', {value: 'value', enumerable: false})
    assert(keys(obj).some(k => k === 'key'))
    assert(!keys(obj, {enumOnly: true}).some(k => k === 'key'))
  })

  it('should support the bind operator', function () {
    assert(keys.call({key: 'value'}).some(k => k === 'key'))
  })
})
