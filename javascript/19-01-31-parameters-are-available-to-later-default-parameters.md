Parameters defined beforehand (to the left) are available to later default parameters:

```javascript
function displayModal(title, closeButtonText = `Close ${title}`) {
  console.log(closeButtonText);
}

displayModal('Shopping Cart'); // Close Shopping Cart
displayModal('Shopping Cart', 'Close Cart'); // Close Cart
```

```javascript
function getFullPrice(price) {
  return price * 1.15;
}

function getValue(price, pricePlusTax = getFullPrice(price)) {
  console.log(price.toFixed(2), pricePlusTax.toFixed(2));
}

getValue(22); // 22.00 25.30
getValue(67); // 67.00 77.05
```
