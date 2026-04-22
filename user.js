const joinUsButton = document.getElementById('join-us');
const loggedInUser = localStorage.getItem("loggedInUser");
const buyButtons = document.querySelectorAll('#buy');
const cart = document.getElementById('cartItem');
const card = document.getElementById('card');

if (loggedInUser) {
    // Show username with logout icon when logged in
    joinUsButton.innerHTML = `Welcome
      ${loggedInUser} 
      <i class="fas fa-sign-out-alt ml-2 hover:scale-102 hover:text-red-500"></i>
    `;

    // Add logout functionality
    joinUsButton.addEventListener('click', () => {
        const confirmLogout = confirm("Do you want to logout?");

        if (confirmLogout) {
            localStorage.removeItem("loggedInUser");
            alert("You have been logged out successfully.");
            window.location.href = 'index.html';
        }
        // If "No" → do nothing
    });

} else {
    // Not logged in → show "Join Us" button
    joinUsButton.innerHTML = `Join Us <i class="fas fa-user-plus ml-2"></i>`;

    joinUsButton.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
}


let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
cart.textContent = cartItems.length;


buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (loggedInUser) {
      button.innerHTML = "Processing...";
      const name = card.querySelector("h3").textContent;
      const price = card.querySelector("span").textContent;
      const image = card.querySelector("img").src;

      const product = { name, price, image };

      setTimeout(() => {
        let purchase = confirm("Are you sure you want to purchase this item?");
        if (purchase) {
          alert("Purchase successful! Thank you for your order.");
          cartItems.push(product);
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          cart.textContent = cartItems.length;
          button.innerHTML = "Added <i class='fas fa-check ml-1'></i>";
        } else {
          alert("Purchase cancelled.");
          cart.textContent = "0";
          button.innerHTML = "Add <i class='fas fa-shopping-cart ml-2'></i>";
        }
      }, 1000);
    } else {
      alert("Please login to continue shopping");
    }
  });
});
