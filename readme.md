# prop-keys

Iterates the keys of all properties (owned and inherited) of an object.

## Installation

Requires [Node.js](https://nodejs.org/) 7.0.0 or above.

```bash
npm i prop-keys
```

## API

The module exports a single function.

### Parameters

1. Bindable: `obj` (object): The object whose property keys you want to iterate.
2. Object argument:
   * Optional: `own` (boolean): If set to `true`, only the object’s “[own](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)” property keys are iterated. If omitted or if set to `false`, both owned and inherited property keys are returned.
   * Optional: `enumOnly` (boolean): If set to `true`, only the keys of properties defined with the `enumerable` flag will be iterated.

### Return Value

An iterator that yields keys of object properties.

## Example

```javascript
const keys = require('prop-keys')

const iter = keys({key: 'value'}, {own: true})
iter.next().value // 'key'
iter.next().done // true
```

## Related

* [props-iterator](https://github.com/lamansky/props-iterator): Same as this module, except it iterates key-value pairs.
* [prop-values](https://github.com/lamansky/prop-values): Same as this module, except it iterates values.
* [keys-iterator](https://github.com/lamansky/keys-iterator): Supports more than just Objects.
