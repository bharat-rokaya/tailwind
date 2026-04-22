const cartContainer = document.getElementById("cart-container");
const totalEl = document.getElementById("total");
const checkoutBtn = document.getElementById("checkout");

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

function renderCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty</p>";
    totalEl.textContent = "0";
    return;
  }

  cartItems.forEach((item, index) => {
    total += parseFloat(item.price.replace("$", ""));

    const card = document.createElement("div");

    card.className = `
      flex items-center justify-between bg-blue-300 p-2 rounded-lg shadow
    `;

    card.innerHTML = `
      <div class="flex items-center gap-4">
        <img src="${item.image}" class="w-20 h-20 object-cover rounded">
        <div>
          <h3 class="font-bold">${item.name}</h3>
          <p class="text-gray-500">${item.price}</p>
        </div>
      </div>

      <button 
        class="remove-btn bg-red-500 hover:bg-red-600 text-white px-3 py-1 transition duration-300 ease rounded hover:scale-102 hover:-translate-y-1"
        data-index="${index}">
        Remove
      </button>
    `;

    cartContainer.appendChild(card);
  });

  totalEl.textContent = total.toFixed(2);
}

renderCart();

cartContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;

    cartItems.splice(index, 1);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    renderCart();
  }
});

checkoutBtn.addEventListener("click", () => {
  if (cartItems.length === 0) {
    alert("Cart is empty!");
    return;
  }

  alert("Order placed successfully!");

  localStorage.removeItem("cartItems");

  cartItems = [];
  renderCart();
});