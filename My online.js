// Sample product data (in a real scenario, this data would come from a database)
const products = [
    { name: 'Product 1', description: 'Description of Product 1', price: '$50.00' },
    { name: 'Product 2', description: 'Description of Product 2', price: '$65.00' },
    // Add more product data as needed
];

function searchProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const matchingProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchInput) || product.description.toLowerCase().includes(searchInput);
    });

    displaySearchResults(matchingProducts);
}

function displaySearchResults(results) {
    const productsSection = document.querySelector('.products');
    productsSection.innerHTML = '';

    if (results.length === 0) {
        productsSection.innerHTML = '<p>No results found.</p>';
    } else {
        results.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
                <button>Add to Cart</button>
            `;
            productsSection.appendChild(productCard);
        });
    }
}

// Sample product data (in a real scenario, this data would come from a database)
const products = [
    { name: 'Product 1', price: 50.00 },
    { name: 'Product 2', price: 65.00 },
    // Add more product data as needed
];

const cart = [];

function displayProducts() {
    const productsSection = document.querySelector('.products');
    productsSection.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productsSection.appendChild(productCard);
    });
}

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Initialize the product display
displayProducts();

// Sample user data (in a real scenario, this data would be stored securely in a database)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Add more user data as needed
];

function registerUser() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    // Check if the username is already taken
    if (users.some(user => user.username === username)) {
        alert('Username already taken. Please choose a different username.');
        return;
    }

    // Add the new user to the list (in a real scenario, you'd hash and store the password securely)
    users.push({ username, password });
    alert('Registration successful. You can now log in.');
}

function loginUser() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful. Welcome, ' + username + '!');
    } else {
        alert('Login failed. Please check your username and password.');
    }
}

const products = [
    { name: "Laptop", category: "electronics" },
    { name: "T-shirt", category: "clothing" },
    { name: "Smartphone", category: "electronics" },
    { name: "Jeans", category: "clothing" },
    { name: "Book 1", category: "books" },
    { name: "Book 2", category: "books" },
];

const categorySelect = document.getElementById('category-select');
const productList = document.getElementById('product-list');

// Function to filter products by category
function filterProducts() {
    const selectedCategory = categorySelect.value;
    const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);
    
    // Display filtered products
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = product.name;
        productList.appendChild(productElement);
    });
}

// Add event listener to the category select element
categorySelect.addEventListener('change', filterProducts);

// Initial load of all products
filterProducts();

// Sample product details
const productDetails = {
    name: "Sample Product",
    price: 50.00,
};

// Event listener for the "Checkout" button
document.getElementById("checkout-button").addEventListener("click", () => {
    // Simulate a payment request to the payment gateway API
    const paymentData = {
        productName: productDetails.name,
        amount: productDetails.price,
        currency: "USD",
    };

    // Use fetch() or any AJAX library to send the payment request
    // Here, we are simulating it with a console log
    console.log("Sending payment request to Payment Gateway API...");
    console.log("Payment Data:", paymentData);

    // Assuming a successful payment response from the API
    const paymentResponse = {
        status: "success",
        transactionId: "12345",
    };

    // Handle the payment response
    handlePaymentResponse(paymentResponse);
});

// Function to handle the payment response
function handlePaymentResponse(response) {
    if (response.status === "success") {
        // Payment successful, display a success message
        const productDetailsContainer = document.getElementById("product-details");
        productDetailsContainer.innerHTML = `<p>Payment successful!</p><p>Transaction ID: ${response.transactionId}</p>`;
    } else {
        // Payment failed, display an error message
        alert("Payment failed. Please try again later.");
    }
}
