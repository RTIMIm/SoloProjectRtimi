var  products = [
    {
        name: "adidas Superstar Shoes ",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1593287073863-c992914cb3e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRpZGFzJTIwc3VwZXJzdGFyfGVufDB8fDB8fHww",
    },
    {
        name: "Adidas Samba Shoes",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1695552836616-37fd42c5d8e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFkaWRhcyUyMHNhbWJhfGVufDB8fDB8fHww",
    },
    {
        name: "Nike Dunk Low Shoes",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1615290642882-6b9501729a27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "GUESS - Vibo Sneakers",
        price: 109,
        image: "https://cristianoshop.com/153966-thickbox_default/guess-vibo-sneakers.jpg",
    },
    {
        name: "New Balance 530 White",
        price: 99.,
        image: "https://photos6.spartoo.eu/photos/268/26882375/26882375_1200_A.jpg",
    }, 
    {
        name: "New Balance 574 ",
        price: 79.99,
        image: "https://3.kixify.com/sites/default/files/imagecache/product_full/product/2024/04/09/p_34801331_200048181_2661011.jpg",
    },
 
];

function displayProducts() {
    var productList = document.getElementById('product-list');
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var productElement = document.createElement('div');
        productElement.classList.add('product');
        
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        
        productList.appendChild(productElement);
    }
}

var cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    alert(`${name} has been added to the cart.`);
}

document.addEventListener('DOMContentLoaded', displayProducts);
