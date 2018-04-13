'use strict'

const assert = require('assert')
const equals = require('equals')
const isIterator = require('is-iterator')
const keys = require('.')

describe('propKeys()', function () {
  it('should return an iterator', function () {
    assert(isIterator(keys({})))
  })

  it('should iterate an object’s own property keys', function () {
    assert(Array.from(keys({key: 'value'})).some(k => k === 'key'))
  })

  it('should iterate an object’s inherited property keys', function () {
    assert(Array.from(keys({key: 'value'})).some(k => k === 'toString'))
  })

  it('should exclude inherited properties if `own` is true', function () {
    assert(equals(Array.from(keys({key: 'value'}, {own: true})), ['key']))
  })

  it('should include only enumerable properties if `enumOnly` is true', function () {
    const obj = {own: 'value'}
    Object.defineProperty(obj, 'key', {value: 'value', enumerable: false})
    assert(Array.from(keys(obj)).some(k => k === 'key'))
    assert(!Array.from(keys(obj, {enumOnly: true})).some(k => k === 'key'))
  })

  it('should support the bind operator', function () {
    assert(Array.from(keys.call({key: 'value'})).some(k => k === 'key'))
  })
})
