
export function createButton() {
    
    const productsBtn = document.createElement('button');
    const menBtn = document.createElement('button');
    const womenBtn = document.createElement('button');


    productsBtn.textContent = "Search products...";
    menBtn.textContent = "Search men products...";
    womenBtn.textContent = "Search women products...";

    productsBtn.classList.add('btn');
    menBtn.classList.add('btn');
    womenBtn.classList.add('btn');

    return { productsBtn, menBtn, womenBtn };
}

