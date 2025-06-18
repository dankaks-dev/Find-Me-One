document.addEventListener("DOMContentLoaded", function () {
  fetch("products.json")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("product-list");
      data.products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <a href="${product.link}" target="_blank">Buy Now</a>
        `;
        container.appendChild(card);
      });
    });
});
