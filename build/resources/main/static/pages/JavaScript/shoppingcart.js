// Obtener carrito del localStorage o inicializarlo vacío
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Guardar carrito en localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function renderShoppingCart() {
    const cartItemsContainer = document.querySelector('.card-products-list-container');
    const emptyCartMessage = '<p>Tu carrito de compras está vacío.</p>';
    const cart = getCart();

    // Clear the shopping cart container
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        // If the cart is empty, show the empty cart message
        cartItemsContainer.innerHTML = emptyCartMessage;
    } else {
        // Render each item in the cart
        cart.forEach((item) => {
            const productCard = document.createElement('div');
            productCard.className = 'cart-product';

            productCard.innerHTML = `
                <img src="${item.coverImg}" alt="${item.title}" class="cart-product-img">
                <div class="cart-product-info">
                    <h3>${item.title}</h3>
                    <p>Autor: ${item.author}</p>
                    <p>Precio: $${item.price.toFixed(2)}</p>
                    
                </div>
                <div class="quantity-selector">
                        <button type="button" class="decrease btn btn-dark" data-isbn="${item.isbn}">-</button>
                        <input type="number" class="quantity-input" min="1" value="${item.quantity || 1}" data-isbn="${item.isbn}">
                        <button type="button" class="increase btn btn-dark" data-isbn="${item.isbn}">+</button>
                    </div>
                <button class="remove-item-btn" data-isbn="${item.isbn}">&times;</button>
            `;

            cartItemsContainer.appendChild(productCard);
        });

        // Add event listeners for quantity changes and item removal
        document.querySelectorAll('.remove-item-btn').forEach((button) =>
            button.addEventListener('click', (event) => removeFromCart(event.target.dataset.isbn))
        );
    }

    // Update cart total price
    updateCartTotal();
}


// Function to calculate and display the cart total price
function updateCartTotal() {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    document.querySelector('.cart-total').innerHTML = 
    `Subtotal: $${total.toFixed(2)}<br>
     Costo de envio: <br>
     Total del carrito: $${total.toFixed(2)}<br>
    `;
}

// Function to format the current date into a DateTime format
function getFormattedDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}


// Function to send cart as an order to the Orders endpoint
async function submitOrder() {
    const cart = getCart();

    if (cart.length === 0) {
        alert("No hay artículos en el carrito para realizar un pedido.");
        return;
    }

    // Calculate the total
    const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

    // Retrieve logged-in user from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser || !loggedInUser.idUser) {
        alert("Usuario no identificado. Inicia sesión para realizar un pedido.");
        return;
    }

    const userId = loggedInUser.idUser; // Extract the user ID

     // Create a simple order payload
     const order = {
        total: total,
        orderDate: getFormattedDateTime(), // Formatted DateTime
        idUser: userId,
    };

    try {
        const response = await fetch('http://54.173.225.101:8080/api/order/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        });

        if (response.ok) {
            const result = await response.json();
            alert(`Pedido realizado con éxito. ID del pedido: ${result.orderId}`);
            
            // Clear the cart after successful submission
            localStorage.removeItem('cart');
            renderShoppingCart();
        } else {
            const errorData = await response.json();
            alert(`Error al realizar el pedido: ${errorData.message || 'Inténtelo nuevamente.'}`);
        }
    } catch (error) {
        console.error("Error al enviar el pedido:", error);
        alert("Hubo un problema al conectar con el servidor.");
    }
}

// Attach event listener to the existing checkout button
document.querySelector('.btn-buy').addEventListener('click', submitOrder);

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('decrease') || e.target.classList.contains('increase')) {
        const input = e.target.closest('.quantity-selector').querySelector('.quantity-input');
        const isbn = input.dataset.isbn;
        const cart = getCart();
        const item = cart.find((i) => i.isbn === isbn);

        // Adjust quantity
        if (e.target.classList.contains('decrease')) {
            input.value = Math.max(1, parseInt(input.value) - 1);
        } else if (e.target.classList.contains('increase')) {
            input.value = parseInt(input.value) + 1;
        }

        // Update cart item quantity
        item.quantity = parseInt(input.value);

        // Save updated cart to localStorage
        saveCart(cart);

        // Update overall cart total
        updateCartTotal();
        renderDropdownCart();  // Re-render the dropdown cart
    }
});

// Handle manual input change
document.addEventListener('input', (e) => {
    if (e.target.classList.contains('quantity-input')) {
        const input = e.target;
        const isbn = input.dataset.isbn;
        const cart = getCart();
        const item = cart.find((i) => i.isbn === isbn);

        // Ensure valid input
        input.value = Math.max(1, parseInt(input.value) || 1);

        // Update cart item quantity
        item.quantity = parseInt(input.value);

        // Save updated cart to localStorage
        saveCart(cart);

        // Update overall cart total
        updateCartTotal();
        renderDropdownCart();  // Re-render the dropdown cart
    }
});

// Render inicial del carrito
renderShoppingCart();



