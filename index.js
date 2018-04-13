'use strict'

const ownAll = require('own-all')
const supportBindOperator = require('sbo')

module.exports = supportBindOperator((obj, {own, enumOnly} = {}) => (enumOnly ? Object.keys : Reflect.ownKeys)(own ? obj : ownAll(obj))[Symbol.iterator]())