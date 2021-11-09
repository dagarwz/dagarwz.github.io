const savedCartLS = JSON.parse(localStorage.getItem("savedCart"))
console.log(savedCartLS)
let cart
if (savedCartLS == null) {
  cart = []
} else {
  cart = savedCartLS
}

function added(button, text, textToChangeBackTo) {
  // "ADD TO CART" button changes to "ADDED!" for short period of time on click
  buttonId = document.getElementById(button)
  buttonId.textContent = text
  setTimeout(function () {
    document.getElementById(button).textContent = textToChangeBackTo
  }, 2000)

  //Cart quantity updates based on quantity of product added to cart, triggered on click of "add to cart" button
  cartNumberString = document.getElementById("cart-number")
  cartNumber = parseInt(cartNumberString.innerHTML)
  itemQuantity = parseInt(document.getElementById("quantity").value)
  cartNumber = cartNumber + itemQuantity
  cartNumberString.textContent = cartNumber

  const product = {
    productName: "Original",
    productGlaze: document.getElementById("glaze").value,
    productQty: document.getElementById("quantity").value,
    productPrice: 1.75,
    productTotalPrice: 1.75 * Number(document.getElementById("quantity").value),
  }
  console.log(product)
  cart.push(product)

  localStorage.setItem("savedCart", JSON.stringify(cart))
  console.log(cart)
}
