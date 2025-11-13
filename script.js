import { loadProducts } from "./js/uiComponent.js";
import { createButton } from "./js/buttons.js";

async function products() {
    const cont  = document.getElementById('productList');
    const allProducts = await loadProducts();

    allProducts.forEach(item => {
        cont.appendChild(item);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const { productsBtn, menBtn, womenBtn } = createButton();

    const btnContainer = document.getElementById('button-container');
    btnContainer.append(productsBtn, menBtn, womenBtn);
    productsBtn.addEventListener('click', () => {
        products();
    });
});

const btn = document.getElementById("btn")

btn.addEventListener('click', async () => {
    console.log("THE BUTTON WAS PUSHED")

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

});

