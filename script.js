import { loadProducts } from "./js/uiComponent.js";
import { createButton } from "./js/buttons.js";
// import { saveFilter } from "./js/filter.js";

let savedProducts = [];

async function products() {

  const cont = document.getElementById("productList");
  const allProducts = await loadProducts();

  allProducts.forEach((item) => {
    cont.appendChild(item);
  });
}

//document.addEventListener("DOMContentLoaded", () => {
 // const { productsBtn, menBtn, womenBtn } = createButton();

  ////////// });

  // productsBtn.addEventListener("click", () => {
  //   saveFilter.saveLastFilter("all");
  // });

  // menBtn.addEventListener("click", () => {
  //   saveFilter.saveLastFilter("men");
  //   products();
  // });

  // womenBtn.addEventListener("click", () => {
  //   saveFilter.saveLastFilter("women");
  //   products();
  // });

  // const savedFilter = saveFilter.loadLastFilter(); // Load last saved filter
  // if (savedFilter && savedFilter.type) {
  //   console.log("Hittade sparat filter:", savedFilter.type); // Log the found filter type
  //   if (savedFilter.type === "all") {
  //     productsBtn.click();
  //   } else if (savedFilter.type === "men") { // Corrected condition
  //     menBtn.click();
  //   } else if (savedFilter.type === "women") {
  //     womenBtn.click();
  //   }
  // } else {
  //   products();
  // }
//});


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
  const results = data.filter((p) => p.title.toLowerCase().includes(q));
  document.getElementById("productList").innerHTML =
    results
      .map(
        (p) => `
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
