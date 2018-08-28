# URLSearchParams

`URLSearchParams` defines utility method to work with URL

## Usage Example

Let's imagine we have a iframe which we configure with help of the query string in URL. URL will be following:

```
https://iframe.link/?id=123&language=english&color=#2364AA
```

Now we need to get our configuration and we can do following:

```javascript
const searchParams = new URLSearchParams(window.location.search);

const config = {
  id: searchParams.get('id'), // 123
  langauge: searchParams.get('language'), // english
  /* We also don't need to use decoding to get value with symbols 🔽 */
  color: searchParams.get('color'), // #2364AA
};

// ✨ `URLSearchParams` interface allows to do more things:
/** Check if search parameter exists */
searchParams.has('id'); // true
/** Remove search parameter and it's value from the list */
searchParams.delete('id');
/** Append a specific key/value pair */
searchParams.append('title', 'Awesome Title');
/** Get string containing query string suitable to use in a URL */
searchParams.toString(); // language=english&color=&title=Awesome+Title
```

More information:

- [MDN - URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
