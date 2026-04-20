const joinUsButton = document.getElementById('join-us');
const buyButtons = document.querySelectorAll('#buy');
const loggedInUser = localStorage.getItem("loggedInUser");

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

// Buy buttons functionality (unchanged)
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.innerHTML = "Processing...";
        setTimeout(() => {
            let purchase = confirm("Are you sure you want to purchase this item?");
            if (purchase) {
                alert("Purchase successful! Thank you for your order.");
                button.innerHTML = "Purchased!";
            } else {
                alert("Purchase cancelled.");
                button.innerHTML = "Buy Now<i class='fas fa-shopping-cart ml-2'></i>";
            }
        }, 1000);
    });
});