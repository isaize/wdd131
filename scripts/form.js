const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];
const productSelect = document.getElementById("productName");
if (productSelect) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
const reviewElement = document.getElementById("reviewCount");
if (reviewElement) {
  reviewElement.textContent = reviewCount;
}


const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function () {
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);

  });
}




const today = new Date();
document.getElementById("currentyear").textContent = today.getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;