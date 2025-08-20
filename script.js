const products = [
  { id: 1, name: "Smartphone", price: 699, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Headphones", price: 199, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Laptop", price: 999, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Watch", price: 149, image: "https://via.placeholder.com/150" }
];

const productList = document.getElementById("product-list");

if (productList) {
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<img src="${p.image}" alt="${p.name}"><h3>${p.name}</h3><p>$${p.price}</p><button onclick="addToCart(${p.id})">Add to Cart</button>`;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product.name + " added to cart!");
}