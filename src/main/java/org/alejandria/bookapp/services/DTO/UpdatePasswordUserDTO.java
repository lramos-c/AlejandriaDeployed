package org.alejandria.bookapp.services.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class UpdatePasswordUserDTO {

    private Long idUser;
    private String password;


}
