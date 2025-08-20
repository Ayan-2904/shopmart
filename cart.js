function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartDiv = document.getElementById("cart-items");
  const totalDiv = document.getElementById("total");
  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.textContent = item.name + " - $" + item.price;
    cartDiv.appendChild(div);
    total += item.price;
  });

  totalDiv.textContent = "Total: $" + total;
}

loadCart();