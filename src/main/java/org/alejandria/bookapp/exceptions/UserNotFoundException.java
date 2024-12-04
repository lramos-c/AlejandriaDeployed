package org.alejandria.bookapp.exceptions;


public class UserNotFoundException extends RuntimeException{

    private static final long serialVerisonUID = 1L;

    public UserNotFoundException(Long id) {
        super("El usuario con el id:  " + id +  " no existe! ");
    }
}
