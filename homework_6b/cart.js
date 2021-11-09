const savedCartLS = JSON.parse(localStorage.getItem("savedCart"))
let cart
if (savedCartLS == null) {
  cart = []
} else {
  cart = savedCartLS
}

const template = document.getElementById("line-item-box-template").content

const box = document.getElementById("cart-table")

let item
for (item of cart) {
  // console.log(item)
  const clone = template.cloneNode(true)
  clone.querySelector(".itemName").innerText = item.productName

  clone.querySelector(".itemGlaze").innerText = item.productGlaze
  clone.querySelector(".itemQty").innerText = item.productQty
  clone.querySelector(".itemPrice").innerText = item.productPrice
  clone.querySelector(".itemTotal").innerText = item.productTotalPrice
  // clone.querySelector(".cart-num").innerText = item.cartTotalItems

  // console.log(item)

  const product = item
  clone
    .querySelector(".itemDelete")
    .addEventListener("click", function (event) {
      var buttonClicked = event.target
      buttonClicked.parentElement.parentElement.remove()
      cart.splice(cart.indexOf(item))
      localStorage.setItem("savedCart", JSON.stringify(cart))
    })

  box.appendChild(clone)
}
