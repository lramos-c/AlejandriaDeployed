import obtenerLibrosData from "./obtenerLibros.js";

// Get books from localStorage
function getBooks() {
    return JSON.parse(localStorage.getItem('books')) || [];
}

// Render books on main page
async function renderBooks() {
    const container = document.getElementById('products-container');
    const booksList = await obtenerLibrosData();
    
    // Store books in localStorage for later use
    localStorage.setItem('books', JSON.stringify(booksList));
    
    container.innerHTML = '';

    booksList.forEach((book) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <img src="${book.coverImg || 'default-image.jpg'}" alt="${book.title}" class="product-img">
            <h3 class="product-title">${book.title}</h3>
            <p class="product-author">Autor: ${book.author}</p>
            <p class="product-price">Precio: $${book.price}</p>
            <button class="view-details-btn btn btn-dark" data-isbn="${book.isbn}">Ver Detalles</button>
            <button class="add-to-cart-btn btn btn-primary" data-isbn="${book.isbn}">Añadir al Carrito</button>
        `;

        container.appendChild(productCard);
    });

    // Add event listeners after cards are created
    addEventListeners();
}

function addEventListeners() {
    // View Details buttons
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const isbn = e.target.getAttribute('data-isbn');
            openProductModal(isbn);
        });
    });

    // Add to Cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const isbn = e.target.getAttribute('data-isbn');
            addToCart(isbn);
        });
    });
}

function openProductModal(isbn) {
    const books = getBooks();
    const book = books.find(b => b.isbn === isbn);

    if (book) {
        const modal = document.getElementById('product-modal');
        
        // Update modal content
        document.getElementById('modal-product-img').src = book.coverImg || 'default-image.jpg';
        document.getElementById('modal-product-title').textContent = book.title;
        document.getElementById('modal-product-author').textContent = `Autor: ${book.author}`;
        document.getElementById('modal-product-price').textContent = `Precio: $${book.price}`;
        document.getElementById('modal-product-description').textContent = book.description || 'No hay descripción disponible';

        // Show modal
        modal.style.display = 'block';

        // Add event listener to Add to Cart button in modal
        const modalAddToCartBtn = document.getElementById('add-to-cart-btn');
        modalAddToCartBtn.onclick = () => addToCart(isbn);
    }
}

function addToCart(isbn) {
    const books = getBooks();
    const book = books.find(b => b.isbn === isbn);

    if (book) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.isbn === isbn);

        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            cart.push({ ...book, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Show success message
        alert('Libro añadido al carrito exitosamente');
        
        // Update cart UI if you have a cart display
        if (typeof renderCart === 'function') {
            renderCart();
        }
    }
}

// Modal close button
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('close-modal');
    const modal = document.getElementById('product-modal');

    if (closeBtn && modal) {
        closeBtn.onclick = () => {
            modal.style.display = 'none';
        };
    }

    // Close modal when clicking outside
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Initial render
    renderBooks();
});

// Display logged-in user on page load
window.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  
    if (loggedInUser) {
      const userText = document.getElementById("userText");
      userText.textContent = loggedInUser.name || loggedInUser.email;
    }
  });
    