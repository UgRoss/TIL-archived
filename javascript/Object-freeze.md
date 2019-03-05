# Object.freeze()

The `Object.freeze()` method freezes an object and prevents it from being changed. It's not possible to add, edit, or delete values inside a frozen object. This method also prevents an object prototype from being changed.

Any attempt to change a frozen object will fail, either silently or by throwing a `TypeError` exception (most commonly in `strict mode`).

```javascript
const person = {
  firstName: 'John',
  age: '19'
};

Object.freeze(person);

person.firstName = 'Bob';
console.log(person); // -> { firstName: "John", age: "19" }

delete person.age;
console.log(person); // -> { firstName: "John", age: "19" }

person.lastName = 'Smith';
console.log(person); // -> { firstName: "John", age: "19" }
```
