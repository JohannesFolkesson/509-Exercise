import { loadProducts } from "./js/uiComponent.js";
import { createButton } from "./js/buttons.js";

let savedProducts = [];

async function products() {
    const cont = document.getElementById('productList');

    const allProducts = await loadProducts();

    savedProducts = allProducts;

    allProducts.forEach(item => {
        cont.appendChild(item);
    })
}


function filterProducts(text) {
    const cont = document.getElementById('productList');
    cont.innerHTML = "";

    const query = text.toLowerCase();

    const filtered = savedProducts.filter(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        return title.includes(query);
    });

    filtered.forEach(item => cont.appendChild(item));
}


document.addEventListener('DOMContentLoaded', () => {
    const { productsBtn, menBtn, womenBtn } = createButton();

    const input = document.getElementById('searchInput');


    const btnContainer = document.getElementById('button-container');
    btnContainer.append(productsBtn, menBtn, womenBtn);
    productsBtn.addEventListener('click', () => {
        const value = input.value.trim();

        if (value === "") {
            products();
        } else {
            filterProducts(value);
        }
    });
    products();
});

  async function searchProducts () {
  const q = document.getElementById("searchInput").value.toLowerCase();
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const results = data.filter(p => p.title.toLowerCase().includes(q));
  document.getElementById("productList").innerHTML = results
  .map(
    p => `
      <div class="product">
        <img src="${p.image}" alt="${p.title}" width="100">
        <b>${p.title}</b><br>
        $${p.price}
      </div>me
    `
  )
  .join("") || "Inga produkter hittades.";

};

const btn = document.getElementById("btn");
btn.addEventListener('click', searchProducts);

const input = document.getElementById("searchInput");
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") searchProducts();
});

