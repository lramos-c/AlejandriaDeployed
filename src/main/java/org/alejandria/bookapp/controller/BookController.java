package org.alejandria.bookapp.controller;

import org.alejandria.bookapp.exceptions.BookNotFoundException;
import org.alejandria.bookapp.model.BookEntity;
import org.alejandria.bookapp.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*",methods = {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/api/v1/books")
public class BookController {
    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    //Metodo para mapear getAll() que viene de BookService
    @GetMapping("/all")
    public List<BookEntity> getBooks(){
        return this.bookService.getAll();
    }

    //Metodo para mapear getById() usando PathVariable() en el endpoint
    @GetMapping("/{id}")
    public BookEntity findBookById(@PathVariable(name = "id")Long id){
        return this.bookService.getById(id);
    }

    //Metodo para crear un libro
    @PostMapping("/create-book")
    public ResponseEntity<BookEntity> newBook(@RequestBody BookEntity book){
        if (this.bookService.getByTitle(book.getTitle()) != null){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return ResponseEntity.ok(this.bookService.createBook(book));
    }

    //Metodo para eliminar un user mediante Id
    @DeleteMapping("/delete-book/{id}")
    public void deleteBook(@PathVariable(name = "id")Long id){
        this.bookService.deleteBook(id);
    }

    //Metodo para recupera un libro mediante Titulo utilizando la Query personalizada y la clase ResponseEntity<>
    @GetMapping("/title/{title}")
    public ResponseEntity<BookEntity> getByTitle(@PathVariable(name = "title")String title){
        BookEntity bookByTitle = this.bookService.getByTitle(title);
        if(bookByTitle == null){
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<BookEntity>(bookByTitle, HttpStatus.OK);
    }

    //Metodo para Actualizar toda la entidad usando mapeo en PUT
    @PutMapping("/update-book/{id}")
    public ResponseEntity<BookEntity> updateBook(@PathVariable(name = "id")Long id, @RequestBody BookEntity book){
        try{
            return ResponseEntity.ok(this.bookService.updateBook(book, id));
        } catch (BookNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    //Metodo para recupera un libro mediante ISBN utilizando la Query personalizada y la clase ResponseEntity<>
    @GetMapping("/isbn/{isbn}")
    public ResponseEntity<BookEntity> getByIsbn(@PathVariable(name = "isbn")String isbn){
        BookEntity bookByIsbn = this.bookService.getByIsbn(isbn);
        if(bookByIsbn == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(bookByIsbn);
    }

    //Metodo para recupera un libro mediante Autor utilizando la Query personalizada y la clase ResponseEntity<>
    @GetMapping("/author/{author}")
    public ResponseEntity<List<BookEntity>> getByAuthor(@PathVariable(name = "author")String author){
        List<BookEntity> bookByAuthor = this.bookService.getByAuthor(author);
        if(bookByAuthor == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(bookByAuthor);
    }

    //Metodo para filtrar libros en un rango de precios utilizando la Query personalizada
    @GetMapping("/price/{minPrice}/{maxPrice}")
    public ResponseEntity<List<BookEntity>> getBooksByPriceRange(@PathVariable(name = "minPrice")Double minPrice, @PathVariable(name = "maxPrice")Double maxPrice){
        List<BookEntity> booksInRange = this.bookService.getByPrices(minPrice, maxPrice);
        if(booksInRange == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(booksInRange);
    }

    //Metodo para mapear getByCategory() usando PathVariable() en el endpoint
    @GetMapping("/category/{category}")
    public List<BookEntity> getBooksByCategory(@PathVariable(name = "category")String category){
        return this.bookService.getByCategory(category);
    }

    //Metodo para mapear getByPublisher() usando PathVariable() en el endpoint
    @GetMapping("/publisher/{publisher}")
    public List<BookEntity> getBooksByPublisher(@PathVariable(name = "publisher")String publisher){
        return this.bookService.getByPublisher(publisher);
    }

}
