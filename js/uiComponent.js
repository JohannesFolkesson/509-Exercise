import { fakeStoreApi } from './apiService.js';


export async function loadProducts() {

    const products = await fakeStoreApi();

    const allProducts = [];

    products.forEach((product) => {

        const wrapper = document.createElement('div');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');
        const pTagPrice = document.createElement('p');
        const pTagDesc = document.createElement('p');
        const pTagCategory = document.createElement('p');

        h3.textContent = product.title;
        img.src = product.image;
        pTagPrice.textContent = product.price;
        pTagDesc.textContent = product.description;
        pTagCategory.textContent = product.category;


        wrapper.append(h3, img, pTagPrice, pTagDesc, pTagCategory);
        allProducts.push(wrapper);

    });
    return allProducts;
}


