var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push( {itemName: item, itemPrice: Math.floor(Math.random() * 101)} );
 return( `${item} has been added to your cart.`);
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    return(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
  } else if (cart.length === 2) {
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
  } else {
    return(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`)
  }
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
