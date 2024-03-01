var products = [
    { id: 1, name: "PREMIUM HEAVY TIRE CHAINS", description: "Atlas couldn't hold these chains.", category: "Chains", imagePath: "images/chains0.png", price: 143.99 },
    { id: 2, name: "REINFORCED ROUND CHAINS", description: "7x reinforced. Extra round.", category: "Chains", imagePath: "images/chains1.jpg", price: 279.99 },
    { id: 3, name: "GOLD CHAINS", description: "24K", category: "Chains", imagePath: "images/chains2.webp", price: 35999.99 },

    { id: 4, name: "SPOKE WHEELS", description: "Extra spiky", category: "Spikes", imagePath: "images/spikes0.avif", price: 399.99 },
    { id: 5, name: "ARMY HUB KIT", description: "STAY BACK 200 FT", category: "Spikes", imagePath: "images/spikes1.webp", price: 499.99 },
    { id: 6, name: "DALEK HUB KIT", description: "Infinitely precise", category: "Spikes", imagePath: "images/spikes3.jpg", price: 699.99 },

    { id: 7, name: "1500cc super charger kit", description: "Descriptive description", category: "Jets", imagePath: "images/exhaust1.jpg", price: 15000.00 },
    { id: 8, name: "180G4 Jet Engine Upgrade Kit", description: "Large jet", category: "Jets", imagePath: "images/exhaust2.webp", price: 59719.99 },
    { id: 9, name: "'Artemis' Rocket Power Kit", description: "Larger jet", category: "Jets", imagePath: "images/exhaust3.webp", price: 712979.99 },
];

function filterProducts() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var filteredProducts = products.filter(function (product) {
        return product.name.toLowerCase().includes(searchTerm) || product.category.toLowerCase().includes(searchTerm);
    });
    displayProducts(filteredProducts);
}

function displayProducts(products) {
    var productList = document.getElementById("productList");
    productList.innerHTML = "";
    products.forEach(function (product) {
        var li = document.createElement("li");
        li.classList.add("product-item");
        li.innerHTML = `
            <div>Product ID: ${product.id}</div>
            <div>Name: ${product.name}</div>
            <div>Description: ${product.description}</div>
            <div>Category: ${product.category}</div>
            <div>Image Path: ${product.imagePath}</div>
            <div>Price: ${product.price}</div>
        `;
        li.addEventListener("click", function () {
            alert("Selected Product: " + product.name);
        });
        productList.appendChild(li);
    });
}

displayProducts(products);

document.getElementById("searchInput").addEventListener("input", filterProducts);

document.getElementById("addProductForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var productName = document.getElementById("productName").value;
    var productDescription = document.getElementById("productDescription").value;
    var productCategory = document.getElementById("productCategory").value;
    var productImagePath = document.getElementById("productImagePath").value;
    var productPrice = parseFloat(document.getElementById("productPrice").value);
    var newProduct = {
        id: products.length + 1,
        name: productName,
        description: productDescription,
        category: productCategory,
        imagePath: productImagePath,
        price: productPrice
    };
    products.push(newProduct);
    displayProducts(products);
    document.getElementById("productName").value = "";
    document.getElementById("productDescription").value = "";
    document.getElementById("productCategory").value = "";
    document.getElementById("productImagePath").value = "";
    document.getElementById("productPrice").value = "";
    alert("Product added successfully!");
});