package org.alejandria.bookapp.exceptions;

public class BookNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;
    // Metodo constructor que evalua un parametro, el (Long id) y lanza un mensaje
    public BookNotFoundException(Long id) {
        super("El libro con el id:" + id + " no existe.");
    }
}
