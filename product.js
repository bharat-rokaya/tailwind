const productList = document.getElementById("product-list");

const products = [
  {
    image: "images/tshirt1.jpg",
    name: "Harajuku T-shirt",
    description: "Graphic, comfy , street style t-shirt",
    price: "22.34",
  },
  {
    image: "images/tshirt2.jpg",
    name: "Cat T-shirt",
    description: "Graphic, cat style printed  t-shirt",
    price: "22.34",
  },
  {
    image: "images/tshirt3.jpg",
    name: "Anime girl T-shirt",
    description: "Graphic, comfy , street, anime girl printed style t-shirt",
    price: "22.34",
  },
  {
    image: "images/shoes.jpg",
    name: "Mellow 1 TXR 34",
    description: "Graphic, comfy , street, mellow style shoes",
    price: "22.34",
  },
  {
    image: "images/shoes2.jpg",
    name: "Plain shoes",
    description: "Simple and plain style shoes",
    price: "22.34",
  },
  {
    image: "images/tshirt1.jpg",
    name: "Harajuku T-shirt",
    description: "Graphic, comfy , street style t-shirt",
    price: "22.34",
  },
  {
    image: "images/tshirt2.jpg",
    name: "Cat T-shirt",
    description: "Graphic, cat style printed  t-shirt",
    price: "22.34",
  },
  {
    image: "images/tshirt3.jpg",
    name: "Anime girl T-shirt",
    description: "Graphic, comfy , street, anime girl printed style t-shirt",
    price: "22.34",
  },
];

products.forEach((product) => {
  const card = document.createElement("div");

  card.id = 'card';
  card.className = `
    bg-white p-4 rounded-xl hover:shadow-lg
    hover:scale-101 hover:-translate-y-1 transition duration-300
  `;

  card.innerHTML = `
    <img src="${product.image}" class="w-full h-auto object-cover rounded-lg">

    <h3 class="text-lg font-semibold mt-3">
      ${product.name}
    </h3>

    <p class="text-gray-500 text-sm">
      ${product.description}
    </p>

    <div class="flex justify-between items-center mt-3">
      <span class="text-green-600 font-bold">
        $${product.price}
      </span>

      <button id="buy" class="bg-blue-500 text-white px-3 py-1 pointer-cursor rounded-lg transition-all duration-200 ease hover:scale-104 hover:bg-blue-600">
        Add <i class="fas fa-shopping-cart ml-1"></i>
      </button>
    </div>
  `;

  productList.appendChild(card);
});