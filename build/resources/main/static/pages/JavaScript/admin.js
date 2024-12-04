// Cargar libros desde localStorage o establecer el array inicial
let books = JSON.parse(localStorage.getItem('books')) || [
    { img: 'https://m.media-amazon.com/images/I/81Z-yHX8OcL._AC_UF1000,1000_QL80_.jpg', isbn: '9781250773021', title: 'A Court of Thorns and Roses', author: 'Sarah J. Maas', publisher: 'Bloomsbury Publishing', description: 'A fantasy novel about a young huntress who gets drawn into the magical and dangerous world of the Fae.', price: 429.00,rating:4 },
    { img: 'https://m.media-amazon.com/images/I/712zD1rKTUL._UF1000,1000_QL80_.jpg', isbn: '9780593189657', title: 'It Ends With Us', author: 'Colleen Hoover', publisher: 'Atria Books', description: 'A heart-wrenching love story that explores domestic abuse and the complexities of relationships.', price: 349.99,rating:3 },
    { img: 'https://m.media-amazon.com/images/I/91868k2+gUL._AC_UF1000,1000_QL80_.jpg', isbn: '9781250276751', title: 'Verity', author: 'Colleen Hoover', publisher: 'Montlake', description: 'A psychological thriller about a struggling writer who uncovers chilling secrets while ghostwriting an unfinished novel.', price: 399.99,rating:5 },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wi6_2fi2vu2Q5sD0mrUvP327oOUaJ4ggrw&s', isbn: '9780399590504', title: 'Before We Were Strangers', author: 'Renée Carlino', publisher: 'Atria Books', description: 'A heartfelt romance about two college friends who reconnect after 15 years.', price: 299.99,rating:2 },
    { img: 'https://m.media-amazon.com/images/I/81ioPZFMeUL._UF894,1000_QL80_.jpg', isbn: '9780062457714', title: 'The Alchemist', author: 'Paulo Coelho', publisher: 'HarperOne', description: 'An inspiring tale of self-discovery about a shepherd who journeys in search of treasure.', price: 279.99 ,rating:4},
    { img: 'https://m.media-amazon.com/images/I/81Qg0DLNGTL.jpg', isbn: '9781501128035', title: 'The Light We Lost', author: 'Jill Santopolo', publisher: 'G.P. Putnam\'s Sons', description: 'A romantic drama exploring love, fate, and the choices that shape our lives.', price: 319.00 ,rating:3},
    { img: 'https://m.media-amazon.com/images/I/81msb6gUBTL._AC_UF1000,1000_QL80_.jpg', isbn: '9780316408181', title: 'The Song of Achilles', author: 'Madeline Miller', publisher: 'Ecco', description: 'A retelling of the Iliad, focused on the epic romance between Achilles and Patroclus.', price: 399.99 ,rating:1},
    { img: 'https://m.media-amazon.com/images/I/81Z+3n31w7L._UF894,1000_QL80_.jpg', isbn: '9781250313189', title: 'Daisy Jones & The Six', author: 'Taylor Jenkins Reid', publisher: 'Ballantine Books', description: 'A fictional oral history of a 1970s rock band and their rise to fame.', price: 379.00 ,rating:2},
    { img: 'https://m.media-amazon.com/images/I/71kdiN5Y1YL.jpg', isbn: '9781982131736', title: 'Beach Read', author: 'Emily Henry', publisher: 'Berkley', description: 'A romantic comedy about two writers who make a bet to finish their novels while navigating their feelings for each other.', price: 329.99 ,rating:4},
    { img: 'https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg', isbn: '9781524763169', title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', publisher: 'HarperOne', description: 'A no-nonsense guide to living a meaningful life by embracing limits and facing truths.', price: 459.00,rating:5 }
];

// Función para guardar libros en localStorage
function saveBooks() {
    localStorage.setItem('books', JSON.stringify(books));
}

// Función para renderizar libros en la lista
function renderBooks() {
    const list = document.getElementById('book-list');
    list.innerHTML = '';
    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${book.img}" alt="${book.title}" width="100">
            <strong>${book.title}</strong><br>
            ISBN: ${book.isbn}<br>
            Autor: ${book.author}<br>
            Editorial: ${book.publisher}<br>
            Descripción: ${book.description}<br>
            Precio: $${book.price.toFixed(2)}
            <button onclick="deleteBook(${index})">Eliminar</button>
            <button onclick="editBook(${index})">Editar</button>
        `;
        list.appendChild(li);
    });
}

// Función para agregar un libro
function addBook(event) {
    event.preventDefault();
    const rating = Math.floor(Math.random() * 5) + 1;
    const newBook = {
        img: document.getElementById('img').value,
        isbn: document.getElementById('isbn').value,
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        publisher: document.getElementById('publisher').value,
        description: document.getElementById('description').value,
        price: parseFloat(document.getElementById('price').value),
        rating: rating,
    };
    books.push(newBook);
    saveBooks(); // Guardar en localStorage
    renderBooks();
    document.getElementById('book-form').reset();
}

// Función para eliminar un libro específico
function deleteBook(index) {
    books.splice(index, 1);
    saveBooks(); // Guardar en localStorage
    renderBooks();
}

// Función para editar un libro
function editBook(index) {
    const book = books[index];
    document.getElementById('img').value = book.img;
    document.getElementById('isbn').value = book.isbn;
    document.getElementById('title').value = book.title;
    document.getElementById('author').value = book.author;
    document.getElementById('publisher').value = book.publisher;
    document.getElementById('description').value = book.description;
    document.getElementById('price').value = book.price;
    books.splice(index, 1);
}

// Función para borrar toda la lista de libros
function clearList() {
    books = [];
    saveBooks(); // Limpiar localStorage
    renderBooks();
}


document.getElementById('book-form').addEventListener('submit', addBook);
document.getElementById('clear-list').addEventListener('click', clearList);

function toggleActiveBook(index) {
    const listItems = document.querySelectorAll('#book-list li');
    listItems.forEach((item, i) => {
        if (i === index) {
            item.classList.toggle('active');
        } else {
            item.classList.remove('active'); 
        }
    });
}

function renderBooks() {
    const list = document.getElementById('book-list');
    list.innerHTML = '';
    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${book.img}" alt="${book.title}" width="100">
            <strong>${book.title}</strong><br>
            ISBN: ${book.isbn}<br>
            Autor: ${book.author}<br>
            Editorial: ${book.publisher}<br>
            Descripción: ${book.description}<br>
            Precio: $${book.price.toFixed(2)}
            <button onclick="deleteBook(${index})">Eliminar</button>
            <button onclick="editBook(${index})">Editar</button>
        `;
        li.addEventListener('click', () => toggleActiveBook(index));
        list.appendChild(li);
    });
}

// Render inicial
renderBooks();