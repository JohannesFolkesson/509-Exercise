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
