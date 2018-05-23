# prop-keys

Returns an array of the keys of all properties (owned and inherited) of an object.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i prop-keys
```

## API

The module exports a single function.

### Parameters

1. Bindable: `obj` (object): The object whose property keys you want to get.
2. Object argument:
   * Optional: `own` (boolean): If set to `true`, only the object’s “[own](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)” property keys are returned. If omitted or if set to `false`, both owned and inherited property keys are returned.
   * Optional: `enumOnly` (boolean): If set to `true`, only the keys of properties defined with the `enumerable` flag will be returned.

### Return Value

An array of the keys of object properties.

## Example

```javascript
const keys = require('prop-keys')

keys({key: 'value'}, {own: true}) // ['key']
```

## Related

* [prop-entries](https://github.com/lamansky/prop-entries): Same as this module, except it returns key-value pairs.
* [prop-values](https://github.com/lamansky/prop-values): Same as this module, except it returns values.
* [keys-array](https://github.com/lamansky/keys-array): Supports more than just Objects.
