// select the DOM elements for output
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        avgRating: 5.0
    }
];

const productSelect = document.getElementById('product');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

    if (!localStorage.getItem('reviewCounter')) {
        localStorage.setItem('reviewCounter', '0');
        }

    let reviewCounter = parseInt(localStorage.getItem('reviewCounter'), 10);
    reviewCounter++;
    localStorage.setItem('reviewCounter', reviewCounter.toString());
    
    document.getElementById('review-count').textContent = reviewCounter;