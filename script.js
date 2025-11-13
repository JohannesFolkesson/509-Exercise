import { loadProducts } from "./js/uiComponent.js";
import { createButton } from "./js/buttons.js";

async function products() {
    const cont  = document.getElementById('productList');
    const allProducts = await loadProducts();

    allProducts.forEach(item => {
        cont.appendChild(item);
    })
}

document.addEventListener('DOMContentLoader', () => {
    const { productsBtn, menBtn, womenBtn } = createButton();

    const btnContainer = document.getElementById('button-container');
    btnContainer.append(productsBtn, menBtn, womenBtn);
    productsBtn.addEventListener('click', () => {
        products();
    });
});

const btn = document.getElementById("button")

btn.addEventListener('click', () => {
    console.log("THE BUTTON WAS PUSHED")

})
