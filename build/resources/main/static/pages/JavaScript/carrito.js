// Obtener carrito del localStorage o inicializarlo vacío
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Guardar carrito en localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Clear the cart UI before re-rendering
    cartItemsContainer.innerHTML = '';

    // Loop through the cart items and render them
    cart.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div>
                <img src="${item.coverImg}" alt="${item.title}">
                <strong>${item.title}</strong> - $${item.price.toFixed(2)} (x${item.quantity})
            </div>
            <button class="remove-item-btn" data-isbn="${item.isbn}">&times;</button>
        `;
        cartItemsContainer.appendChild(listItem);
    });

    // Update the cart count display
    cartCount.textContent = cart.reduce((total, item) => total + (item.quantity || 1), 0);

    // Add event listeners for the remove buttons
    document.querySelectorAll('.remove-item-btn').forEach((button) =>
        button.addEventListener('click', (event) => removeFromCart(event.target.dataset.isbn))
    );
}

function removeFromCart(isbn) {
    const cart = getCart();
    const updatedCart = cart.filter((item) => item.isbn !== isbn);
    saveCart(updatedCart);

    // Re-render both carts
    renderCart();
    renderShoppingCart();
}

function addToCart(isbn) {
    const books = getBooks();  // Retrieve the books data
    const book = books.find((b) => b.isbn === isbn);  // Find the book by ISBN
    
    if (book) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the book is already in the cart by ISBN
        const existingItem = cart.find((item) => item.isbn === isbn);
        
        if (existingItem) {
            // If the book is already in the cart, increase the quantity
            existingItem.quantity += 1;
        } else {
            // If the book is not in the cart, add it with quantity 1
            book.quantity = 1;
            cart.push(book);
        }

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));


        // Update the cart UI dynamically without reloading the page
        renderCart();  // Call renderCart to update the cart UI
    }
}

// Mostrar/Ocultar lista desplegable del carrito
document.querySelector('.cart-btn').addEventListener('click', () => {
    const dropdown = document.getElementById('cart-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Render inicial del carrito
renderCart();

// Display logged-in user on page load
window.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  
    if (loggedInUser) {
      const userText = document.getElementById("userText");
      userText.textContent = loggedInUser.name || loggedInUser.email;
    }
  });
    