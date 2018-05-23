'use strict'

const ownAll = require('own-all')
const sbo = require('sbo')

module.exports = sbo((obj, {own, enumOnly} = {}) => (enumOnly ? Object.keys : Reflect.ownKeys)(own ? obj : ownAll(obj)))
