# Math.Sign()

`Math.sign()` function returns the sign of the value, indicating whethever number is positive, negative or zero. Function can return following values:

- `1` - for positive numbers
- `-1` - for negative numbers
- `0` - for positive zero
- `-0` - for negative zero
- `NaN` - in all other cases

The argument passed to this functions will be converted to `number` type implicitly.

Example:

```javascript
Math.sign(3); // 1
Math.sign(Infinity); // 1
Math.sign(-Infinity); // -1
Math.sign(-1000); // -1
Math.sign(0); // 0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign('foo'); // NaN
Math.sign(); // NaN
```
