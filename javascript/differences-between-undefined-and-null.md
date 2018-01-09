# Differences between `undefined` and `null`

### Same:

* Both are primitives
* Both are falsy:
  * `Boolean(undefined) // false`
  * `Boolean(null) // false`

### Different:

* `undefined` means that a variable has not been declared, or it has been declared but has not yet been assigned a value.
* `null` is an assignment value that means “no value”. Javascript itself never sets a value to `null`
* Difference in `typeof`:
  * `typeof null; // "object"`
  * `typeof undefined; // "undefined"`
* `undefined` is not a valid JSON while `null` is.

### Tips:

* Check if variable is `null`:

```javascript
variable === null;
```

* Check if variable is `undefined`:

```javascript
typeof variable === 'undefined';
```

* Comparison (Equality returns `true` and identity returns `false`) :

```javascript
undefined == null; // true

undefined === null; // false
```
