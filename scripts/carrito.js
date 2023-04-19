const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");

let total = 0;

function addToCart(item) {
  const li = document.createElement("li");
  li.innerText = `${item.name} - $${item.price}`;
  cartList.appendChild(li);
  total += item.price;
  cartTotal.innerText = `$${total}`;
}

checkoutBtn.addEventListener("click", () => {
  alert(`Total de compra: $${total}`);
});
