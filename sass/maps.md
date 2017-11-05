# Maps and `@each` directive
### Maps
> Maps represent an association between keys and values, where keys are used to look up values. They make it easy to collect values into named groups and access those groups dynamically. They have no direct parallel in CSS, although they’re syntactically similar to media query expressions.

Declaration example: 

```sass
$social-colors: (
  facebook: #3B5998,
  instagram: #e4405f,
  linkedin: #0077B5,
  github: #181717
);
```
---
### `@Each` directive

The `@each` directive usually has the form `@each $var in <list or map>` but it can also use multiple variables like `@each $var1, $var2, ... in <list>`.

**Usage example:**

```sass
@each $name, $color in $social-colors {
  .social-btn.#{$name} {
    color: $color;
  }
}
```
**Is compiled to:**

```sass
.social-btn.facebook {
 color: #3B5998;
}
.social-btn.instagram {
 color: #3B5998;
}
.social-btn.linkedin {
 color: #3B5998;
}
.social-btn.github {
 color: #3B5998;
}
```
----

### Useful links:

* [Sass Maps](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#Maps)
* [Sass `@each` directive](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_each__each-directive) 