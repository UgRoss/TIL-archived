# Enums

An enum is a way to organize a collection of related values.

```typescript
enum Season {
  Summer,
  Autumn,
  Winter,
  Spring,
}
```

These enums values are number based:

```typescript
const summer = Season.Summer;
console.log(summer);
// -> 0
```

`Direction.Up` is `0`, `Direction.Down` is `1` and so on...

Now, let's look at the JavaScript that it generates:

```javascript
var Seasons;
(function(Seasons) {
  Seasons[(Seasons['Summer'] = 0)] = 'Summer';
  Seasons[(Seasons['Autumn'] = 1)] = 'Autumn';
  Seasons[(Seasons['Winter'] = 2)] = 'Winter';
  Seasons[(Seasons['Spring'] = 3)] = 'Spring';
})(Seasons || (Seasons = {}));
```

Let's take the line `Seasons[Seasons["Summer"] = 0] = "Summer";`. To understand this line we just need to analyze `Seasons["Summer"] = 0`, here we can see that it assigns value `0` to the `Seasons.Summer`, then we know that assignment operator returns the assigned value, so further execution is `Seasons[0] = "Summer"`.

```javascript
console.log(Season.Summer); // 0
console.log(Season[0]); // "Summer"
```

**Enums have autoincrementing behaviour:**

```typescript
enum Season {
  Summer = 1,
  Autumn,
  Winter,
  Spring,
}
```

When `Up` is initilized with `1`, others have auto-incremented value from that point. `Direction.Down` has value `2`, `Direction.Left` has `3`, `Direction.Right` has `4`.

**String Enums**

```typescript
enum Season {
  Summer = 'SUMMER',
  Autumn = 'AUTUMN',
  Winter = 'WINTER',
  Spring = 'SPRING',
}
```

<small>String enums don't have auto-increment behaviour. It's required to give assign a value to each enum member.</small>

Generated code is following:

```javascript
var Season;
(function(Season) {
  Season['Summer'] = 'SUMMER';
  Season['Autumn'] = 'AUTUMN';
  Season['Winter'] = 'WINTER';
  Season['Spring'] = 'SPRING';
})(Season || (Season = {}));
```

So

```javascript
console.log(Season.Summer); // -> "SUMMER"
console.log(Season[0]); // -> undefined
```

---

Further reading:

- https://www.typescriptlang.org/docs/handbook/enums.html
